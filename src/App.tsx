import React from "react";
import Button from "./components/Button";

import {ButtonType, ButtonSize} from './components/Button'
const App: React.FC = () => {
  return (
    <div className="App">
      App
      <h1>Hello</h1>
      <hr />
      <Button>Hello World</Button>
      <Button href="http://www.baidu.com" btnType={ButtonType.Link}>Hello World</Button>
      <Button size={ButtonSize.Large}>Hello World</Button>
      <Button onClick={() => alert(1)} btnType={ButtonType.Primary}>Hello World</Button>
      <Button btnType={ButtonType.Primary} disabled>Hello World</Button>
      <Button btnType={ButtonType.Danger} >Hello World</Button>
    </div>
  );
};

export default App;
