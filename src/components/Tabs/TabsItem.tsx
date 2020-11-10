import React, { useContext } from 'react'
import classnames from 'classnames'
import { TabsContext } from './Tabs'

export interface TabsItemProps {
  index?: number
  classname?: string
  label?: string,
  children?: React.ReactNode,
  disabled?: boolean,
}

const MTabsItem: React.FC<TabsItemProps> = (props) => {
  const { index, classname, label, children, disabled } = props
  const context = useContext(TabsContext)
  const classes = classnames('tabs-item', classname, {
      'is-active': index === context.index,
      'is-disabled': disabled
  })

const handleClick = () => {
    if(index !== undefined && context.setContent && !disabled) {
        context.setContent(children, index)
    }
}

  return <div className={classes} onClick={handleClick}>{label}</div>
}

MTabsItem.defaultProps = {
  label: 'Tabs 1'
}
MTabsItem.displayName = 'TabsItem'
export default MTabsItem
