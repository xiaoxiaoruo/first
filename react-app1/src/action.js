// let add = {
//     type:'ADD'
// }
export let add = (num)=>{
    console.log('add-action',num)
    return {
        type:'ADD',
        num
    }
}

export let jian = (sum)=>{
    return{
        type:'JIAN',
        sum
    }
}

export let cet4 = (sum)=>{
    return{
        type:'CET4',
        sum
    }
}
// 暴露多个不加default
// export default add;