import React from 'react'
import Button from './components/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import MTabs from './components/Tabs/Tabs'
import MTabsItem from './components/Tabs/TabsItem'

import { ButtonType, ButtonSize } from './components/Button'
import { Tabs } from 'antd'
const { TabPane } = Tabs
const App: React.FC = () => {
  const testFunction = (index: number) => {
    console.log(index)
  }

  return (
    <div className="App">
      App
      <h1>Hello</h1>
      <hr />
      <Menu defaultIndex={'3'}>
        <MenuItem>首页</MenuItem>
        <SubMenu title="作品集">
          <MenuItem>作品集1321312</MenuItem>
          <MenuItem>作品集2</MenuItem>
          <MenuItem>作品集3</MenuItem>
        </SubMenu>
        <MenuItem disabled>关于我们</MenuItem>
        <MenuItem>常见问题</MenuItem>
      </Menu>
      <Menu mode="vertical" defaultOpenSubMenus={['1']}>
        <MenuItem>首页</MenuItem>
        <SubMenu title="作品集">
          <MenuItem>作品集1321312</MenuItem>
          <MenuItem>作品集2</MenuItem>
          <MenuItem>作品集3</MenuItem>
        </SubMenu>
        <MenuItem>关于我们</MenuItem>
        <MenuItem>常见问题</MenuItem>
      </Menu>
      <Button>Hello World</Button>
      <Button href="http://www.baidu.com" btnType={ButtonType.Link}>
        Hello World
      </Button>
      <Button size={ButtonSize.Large}>Hello World</Button>
      <Button onClick={() => alert(1)} btnType={ButtonType.Primary}>
        Hello World
      </Button>
      <Button btnType={ButtonType.Primary} disabled>
        Hello World
      </Button>
      <Button btnType={ButtonType.Danger}>Hello World</Button>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <MTabs  onTabsChange={testFunction} mode='horizontal'>
        <MTabsItem label={'tabs 1'}>content for tabs1</MTabsItem>
        <MTabsItem label={'tabs 2'} disabled>
          content for tabs2
        </MTabsItem>
        <MTabsItem label={'tabs 3'}>
          <div style={{width: '10px', height: '10px', background: 'red'}}></div>
        </MTabsItem>
      </MTabs>
    </div>
  )
}

export default App
