import React from 'react'
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
}

export const MenuContext = React.createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus, children } = props
  const classes = classnames('origin-menu', className, {
    [`menu-${mode}`]: mode
  })
  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      const childElemet = child as React.FunctionComponentElement<MenuItemProps>
      const { name } = childElemet.type
      if (name === 'MenuItem') {
        return React.cloneElement(childElemet, {
          index: index.toString()
        })
      } else {
        console.warn('Menu Component have a children Element Which is not a MenuItem component')
      }
    })
  const handleSelect = (index: string) => {
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: '1',
    onSelect: handleSelect
  }
  return (
    <>
      <ul className={classes}>
        <MenuContext.Provider value={passedContext}>{renderChildren}</MenuContext.Provider>
      </ul>
    </>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal'
}

export default Menu
