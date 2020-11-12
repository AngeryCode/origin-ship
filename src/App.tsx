import React, { useState } from 'react'
import Button from './components/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import MTabs from './components/Tabs/Tabs'
import MTabsItem from './components/Tabs/TabsItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Tabs } from 'antd'
import Icon from './components/Icon/Icon'
import Transition from './components/Trasition/Transition' 
import Input from './components/Input/Input'
library.add(fas)
const { TabPane } = Tabs
const App: React.FC = () => {
  const testFunction = (index: number) => {
    console.log(index)
  }
  const [active, setActive] = useState(false)
  const [inputDefaultVal, setInputVal] = useState('')
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
      <Menu mode="vertical">
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
      <Button href="http://www.baidu.com" btnType="link">
        Hello World
      </Button>
      <Button size="btn-lg">Hello World</Button>
      <Button onClick={() => alert(1)} btnType="primary">
        Hello World
      </Button>
      <Button btnType="primary" disabled>
        Hello World
      </Button>
      <Button btnType="danger">Hello World</Button>
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
      <MTabs onTabsChange={testFunction} mode="horizontal">
        <MTabsItem label={'tabs 1'}>content for tabs1</MTabsItem>
        <MTabsItem label={'tabs 2'} disabled>
          content for tabs2
        </MTabsItem>
        <MTabsItem label={'tabs 3'}>
          <div style={{ width: '10px', height: '10px', background: 'red' }}></div>
        </MTabsItem>
      </MTabs>
      <FontAwesomeIcon icon="coffee" />
      <Icon icon="coffee" themeColor="primary"></Icon>
      <Button size="btn-lg" onClick={() => setActive(!active)}>
        toggle
      </Button>
      <Transition in={active} timeout={300} animationName="zoom-in-top" wrapper>
        <div>
          <p>p1</p>
          <p>p2</p>
          <p>p3</p>
          <p>p4</p>
          <p>p5</p>
          <Button size="btn-lg" btnType="primary">
            a large button
          </Button>
        </div>
      </Transition>
      <br/>
      <Input placeholder="我是input"></Input>
      <br/>
      <Input  disabled></Input>
      <br/>
      <Input icon="calendar-alt" value={inputDefaultVal} onChange={(e) => { setInputVal(e.target.value)} }></Input>
      <br/>
      <Input prepend="https://" icon="coffee"></Input>
      <br/>
      <Input append=".com" icon="coffee"></Input>
      <br/>
      <Input prepend="https://" append=".com" icon="coffee"></Input>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  )
}

export default App
