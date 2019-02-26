import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        E页面<button onClick={()=>{
            this.props.history.go(-1);
        }}>&lt;上一页</button>
        <button onClick={()=>{
            this.props.history.push("b")
        }}>跳到B页面</button>
      </div>
    )
  }
}
