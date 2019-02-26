import React, { Component } from 'react';
// HashRouter 带# 有历史记录
import {BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
  NavLink
} from 'react-router-dom'
import Home from './component/Home.js'
import A from './component/A.js'
import B from './component/B.js'
import D from './component/D.js'
import E from './component/E.js'
import F from './component/F.js'
import './App.css'
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
            <F></F>
            {/* <Btn></Btn> */}
            {/* NavLink 会在匹配上当前的url的时候给已经渲染的元素添加参数 */}
            <NavLink to="/home" activeClassName="my_active" isActive={()=>{
              console.log("hah")
              return false
            }}>Home页</NavLink>|
            <NavLink to="/a/10">跳转到A页面</NavLink>|
            <NavLink to="/b">跳转到B页面</NavLink>|
            <NavLink to="/c">跳转到C</NavLink>|
            <NavLink to="/d/1">跳转到D</NavLink>
            <NavLink to="/e">跳转到E</NavLink>
            {/* path="/" 模糊匹配  模糊匹配的时候要把带参数的放在最后*/}
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/a" component={A}></Route> */}
            {/* <Switch> */}
              <Route exact path="/home" component={Home}></Route>
              <Route path="/a/:id" component={A}></Route>
              <Route path="/b" component={B}></Route>
              {/* <Route path="/c" render={()=>{
                return <div>CCCCC</div>
              }}></Route> */}
              <Route path="/c" render={()=>{
                return <Redirect to="/"></Redirect>
              }}></Route>
              {/* children: 所以D的组件必须是函数的形式 */}
              {/* <Route path="/d/:x" children={D}></Route> */}
              <Route path="/e" component={E}></Route>
            {/* </Switch> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
