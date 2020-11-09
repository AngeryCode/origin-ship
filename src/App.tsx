import React from 'react'
import Button from './components/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'

import { ButtonType, ButtonSize } from './components/Button'
const App: React.FC = () => {
  return (
    <div className="App">
      App
      <h1>Hello</h1>
      <hr />
      <Menu defaultIndex={'3'} >
        <MenuItem>首页</MenuItem>
        <SubMenu title="作品集" >
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
    </div>
  )
}

export default App
