import React, { Component } from 'react';
import store from './store.js'
import {add,jian,cet4} from './action.js'
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
  }
  add(){
    console.log("add");
    // store.dispatch 触发action
    store.dispatch(add(2));
  }
  render() {
    return (
      <div>
        首页
        {this.props.count}
        <button onClick={this.add}>add</button>
        <button onClick={()=>{
          store.dispatch(jian(1))
        }}>jian</button>
          <div>
            <h1>小小若:{this.props.cet}</h1>
            <button onClick={()=>{
              store.dispatch(cet4(3))
            }}>加加</button>
          </div>
      </div>
    );
  }
}

// let mapStatetoProps = (state) =>{
//   return {
//     count:state.count
//   }
// }
// 将store中的state映射到props中
export default connect((state)=>{
  return {
    count:state.count,
    cet:state.cet
  }
})(App);
