import React, {useState} from 'react'
import classnames from 'classnames'
import { MenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical'
type onSelectType = (index: string) => void
export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: onSelectType
  defaultOpenSubMenus?: string[]
}

export interface IMenuContext {
  index?: string
  onSelect?: onSelectType
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}

export const MenuContext = React.createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children, defaultOpenSubMenus } = props
  const [currentIndex, setActiveIndex] = useState(defaultIndex)
  const classes = classnames('origin-menu', className, {
    [`menu-${mode}`]: mode
  })
  const handleSelect = (index: string) => {
    setActiveIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentIndex,
    onSelect: handleSelect,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const {displayName} = childElement.type
      if(displayName === 'MenuItem' || displayName === 'SubMenu'){
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      }else{
        console.error('warning: Menu has a child element which is not a MenuItem')
      }
    })
  }

  return (
    <>
      <ul className={classes} style={style} data-testid='test-menu'>
        <MenuContext.Provider value={passedContext}>
          {renderChildren()}
        </MenuContext.Provider>
      </ul>
    </>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal'
}

export default Menu
