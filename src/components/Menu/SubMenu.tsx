import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'

export interface SubMenuProps {
  index?: string
  title: string
  disabled?: boolean
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children, disabled } = props
  const context = useContext(MenuContext)
  const opendMenuArry = context.defaultOpenSubMenus as Array<string>
  let opend = false
  if (opendMenuArry && context.mode === 'vertical') {
    opend = index ? opendMenuArry.includes(index) : false
  }
  const [isOpen, setOpen] = useState(opend)
  const classes = classnames('menu-item sub-menu', {
    className,
    'is-active': context.index === index,
    'is-disabled': disabled
  })
  const submenuClasses = classnames('origin-submenu', {
    'is-open': isOpen
  })
  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childrenElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childrenElement, {
          index: index + '-' + i
        })
      } else {
        console.error('warning: SubMenu has a child element which is not a MenuItem')
      }
    })
  }
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!isOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    if (!toggle) {
      timer = setTimeout(() => {
        setOpen(toggle)
      }, 300)
    } else {
      setOpen(toggle)
    }
  }

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick
        }
      : {}

  const hoverEvents =
    context.mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
        }
      : {}

  return (
    <li className={classes} {...hoverEvents} {...clickEvents}>
      <div className="title">{title}</div>
      <ul className={submenuClasses}>{renderChildren()}</ul>
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
