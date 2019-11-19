
//1 创建 一个对象 存放默认状态的
const defaultState = {
    inputValue : '', //输入框
    isAllchecked :false,//全选
    items :[
        {title:'1',isChose:false},
        {title:'2',isChose:false}
    ]
}

//2暴露 出去 执行一个回调函数
export default (state=defaultState,action)=>{ //state 是默认状态 action是改变的状态
    // Reducer 只能接收 state , 不能直接改变 state 需要let 一个新对象 赋值改变
    // console.log(state,action)

    if(action.type==='changeInput'){ //判断
        //1 把state 解析成字符串 在转化成 对象 state=defaultState
        let newState = JSON.parse(JSON.stringify(state)) //深拷贝 
        newState.inputValue = action.value //2 action.value 就是改变的状态赋值个仓库的默认状态
        return newState //3 return
    }
    //增加
    if(action.type==='addlist'){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.items.push(
            {title : action.value,isChose:false}
        )
        newState.inputValue = ''
        return newState
    }
    //删除
    if(action.type==='delete'){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.items.splice(action.index,1)
        return newState
    }
    //全选
    if(action.type==='allChose'){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.isAllchecked = !newState.isAllchecked
        newState.items.forEach(item=>{
            item.isChose = newState.isAllchecked
        })
        return newState
    }
    //选中****
    if(action.type==='chose'){
        let newState = JSON.parse(JSON.stringify(state)) 
        // action.item.isChose = !action.item.isChose
        newState.items[action.index].isChose = !newState.items[action.index].isChose
        return newState
    }
    return state
}