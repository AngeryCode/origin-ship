import React, { useContext, useEffect, useState } from 'react'
import classnames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'
import Icon from '../Icon/Icon'
import Transition from '../Trasition/Transition'

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
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    if (opendMenuArry && context.mode === 'vertical') {
      setOpen(index ? opendMenuArry.includes(index) : false)
    }
    if (context.index?.split('-')[0] === index) {
      setOpen(true)
    } else {
      setOpen(context.index === index)
    }
  }, [opendMenuArry, context, index])
  const classes = classnames('menu-item sub-menu', {
    className,
    'is-active': context.index === index,
    'is-disabled': disabled,
    'is-open': isOpen
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
    <li className={classes} {...hoverEvents}>
      <div className="title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" />
      </div>
      <Transition in={isOpen} timeout={300} animationName="zoom-in-top">
        <ul className={submenuClasses}>{renderChildren()}</ul>
      </Transition>
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
