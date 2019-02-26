import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(params){
    super(params);
    this.state = {

    }
    this.go = this.go.bind(this);
  }
  go(){
    this.props.history.push("/");
  }
  render() {
    console.log(this.props)
    console.log(this.props.match.params.id)
    let {match} = this.props

    return (
      <div>
        A页面
        {match.params.id}
        <button onClick={this.go}>回到首页</button>
        <button onClick={()=>{
          this.props.history.go(-1);
          // this,props.history.goBack();
          // // goForWard 下一步
          // this.props.history.goForward();
          // //push
          // this.props.history.push('/')
        }}>-1</button>
      </div>
    )
  }
}
