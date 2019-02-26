import React, { Component } from 'react'
import {Prompt} from "react-router-dom"

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isWarn:true
    }
  }
  render() {
    return (
      <div>
        Home页
        <button onClick={()=>{
          // this.props.history.goForward 上一页
          this.props.history.go(1)
        }} >&gt;下一页</button>
        {/* <Prompt when={this.state.isShow} message={"确定离开么"}></Prompt> */}
      </div>
    )
  }
}
