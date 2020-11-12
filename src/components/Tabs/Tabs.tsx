import React, { createContext, useEffect, useState } from 'react'
import classnames from 'classnames'
import { TabsItemProps } from './TabsItem'

type TabsMode = 'horizontal' | 'vertical'

interface MTabsProps {
  defaultIndex?: number
  classname?: ''
  labelCenter?: boolean
  mode?: TabsMode
  onTabsChange?: (index: number) => void
}

export interface MTabsContext {
  index?: number
  setContent?: (content: React.ReactNode, index: number) => void
}

export const TabsContext = createContext<MTabsContext>({ index: 0 })
const MTabs: React.FC<MTabsProps> = (props) => {
  const { defaultIndex, classname, children, labelCenter, mode, onTabsChange } = props
  const [firstContent, setFirstContent] = useState<React.ReactNode>()
  const [currentContent, setContent] = useState<React.ReactNode>(firstContent)
  const [currentIndex, setIndex] = useState(defaultIndex)
  const classNames = classnames('origin-tabs', classname, {
    'tabs-horizontal': mode === 'horizontal',
    'tabs-vertical': mode === 'vertical'
  })
  const tabsHeadClasses = classnames('tabs-head', {
    'label-center': mode === 'horizontal' ? labelCenter : false
  })

  useEffect(() => {
    if (children) {
      const child = children as Array<React.ReactElement>
      if (typeof defaultIndex === 'number') {
        setFirstContent(child[defaultIndex]?.props?.children || '')
      } else {
        setFirstContent(child[0]?.props?.children || '')
      }
      setContent(firstContent)
    }
  }, [children, defaultIndex, firstContent])

  const renderChildren = () => {
    const childrenElements = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabsItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabsItem') {
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.error('warning: Tabs component has a child element which is not a TabsItem!')
      }
    })
    return childrenElements
  }

  const handleChangeContent = (currentContent: React.ReactNode, index: number) => {
    setContent(currentContent)
    setIndex(index)
    if (onTabsChange) {
      onTabsChange(index)
    }
  }

  const passedTabsContext: MTabsContext = {
    index: currentIndex,
    setContent: handleChangeContent
  }

  return (
    <>
      <div className={classNames}>
        <TabsContext.Provider value={passedTabsContext}>
          <div className={tabsHeadClasses}>{renderChildren()}</div>
          <div className="tabs-body">{currentContent}</div>
        </TabsContext.Provider>
      </div>
    </>
  )
}

MTabs.defaultProps = {
  defaultIndex: 0,
  labelCenter: false,
  mode: 'horizontal'
}

export default MTabs
