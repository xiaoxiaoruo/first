import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

// let F = withRouter ((props)=>{
//     console.log(props,"F页面")
//     return (
//         <div>
//             F页面<button onClick={()=>{
//                 props.history.push('/b');
//             }}>去B</button>
//         </div>
//     )
// })
class F extends Component{
    render(){
        return (
            <div>
                 F页面<button onClick={()=>{
                this.props.history.push('/b');
            }}>去B</button>
            </div>
        )
    }
}
export default withRouter(F);
