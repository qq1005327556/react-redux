import React, { Component } from 'react';
import store from './store' //引入仓库 
class Input extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        //store.subscribe(this.storeChange.bind(this))  //色波死苦ruai波 //单词订阅
    }
    render() { 
        return ( 
            <div>
                <button
                onClick={this.clickText}
                >全选</button>
                <input
                onChange={this.inputChange} //监听输入框的内容
                onKeyUp = {this.addList.bind(this)}
                value = {this.state.inputValue}
                placeholder='why be to' />
            </div>
         );
    }
    inputChange=(e)=>{
        //1 创建 action对象
        const action ={
            type : 'changeInput',
            value: e.target.value
        }
        //2 放到仓库里
        store.dispatch(action)
        //3 ---->reducer.js 编写逻辑
        console.log(e.target.value)
    }
    //4 更新订阅
    // storeChange(){
    //     this.setState(store.getState())
    // }

    //增加
    addList(e){
        if(e.target.value !== "" ){
            if(e.keyCode===13){
                const action ={
                    type : 'addlist',
                    value : e.target.value
                }
                store.dispatch(action)
            }
        }
    }
    //全选
    clickText=()=>{
        const action = {
            type: 'allChose'
        }
        store.dispatch(action)
    }
}
 
export default Input;