import React, { Component } from 'react';
// HashRouter 带# 有历史记录
import {BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter} from 'react-router-dom'
import Home from './component/Home.js'
import A from './component/A.js'
import B from './component/B.js'
import D from './component/D.js'
// 解决页面没有props的问题
let Btn = withRouter((props) =>{
  console.log(props);
  return (
    <button onClick={()=>{
        props.history.push('/a/8')
      }
    }>click</button>
  )
});

class App extends Component {
  render() {
    return (
      // 有一个根目录
      <div className="App">
        <Router>
          {/* 有一个根目录 */}
          <div>
            <Btn></Btn>
            <Link to="/">Home页</Link>|
            <Link to="/a/10">跳转到A页面</Link>|
            <Link to="/b">跳转到B页面</Link>|
            <Link to="/c">跳转到C</Link>|
            <Link to="/d/1">跳转到D</Link>
            {/* path="/" 模糊匹配 */}
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/a" component={A}></Route> */}
            {/* <Switch> */}
              <Route exact path="/" component={Home}></Route>
              <Route path="/a/:id" component={A}></Route>
              <Route path="/b" component={B}></Route>
              {/* <Route path="/c" render={()=>{
                return <div>CCCCC</div>
              }}></Route> */}
              <Route path="/c" render={()=>{
                return <Redirect to="/"></Redirect>
              }}></Route>
              {/* children: 所以D的组件必须是函数的形式 */}
              <Route path="/d/:x" children={D}></Route>
            {/* </Switch> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
