import React, {useContext} from 'react'
import classnames from 'classnames'
import {MenuContext} from './Menu'

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, children, className } = props
  const context = useContext(MenuContext)
  console.log(context);
  const classes = classnames('menu-item', className)
  return <li className={classes}>{children}</li>
}

export default MenuItem
