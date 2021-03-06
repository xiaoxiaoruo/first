import React, { Component } from 'react'
import {Prompt} from "react-router-dom"
import Axios from 'axios'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isWarn:true,
      list:[]
    }
  }
  componentDidMount(){
    Axios.get("http://www.123.com").then((result)=>{
      console.log(result);
      this.setState({
        list:result.data.list
      })
    }).catch()
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
        <ul>
          {this.state.list.map((obj,index)=>{
            return (
              <li>
              {obj.id}
              {obj.name}
              <img src={obj.image} alt=""/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
