import {combineReducers} from 'redux'
// 接收旧的state和action 进行操作
// state必须有默认值
// 根据你定义的count去state中取值
let count = (state=0,action) =>{
    console.log("srzrdxfchhbjn",state,action)
    switch(action.type){
        case 'ADD':
            return state + action.num;
        case 'JIAN':
            return state - action.sum;
        default :
            return state;
    }
}
let cet = (state=0,action) =>{
    console.log("srzrdxfchhbjn",state,action)
    switch(action.type){
        case 'CET4':
            return state + action.sum
        default :
            return state
    }
}

export default combineReducers({
    count,
    cet
});