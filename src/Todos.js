
//1 引入 React
import React, { Component } from 'react';
import './style.css' //引入样式
//引入组件
import Input from './Input'
import TodosList from './TodosList'
import Footer from './Footer'
//引入仓库
import store from './store/index' //默认引入store/index  前提是store是个文件夹并且index.js里面有export的东西 
//2创建组件
class Todos extends Component {
    constructor(props) { //constructor 啃死chua科特 //构造
        super(props);
        //赋值给this.state 
        this.state = store.getState()
        //订阅模式 
        store.subscribe(this.storeChange.bind(this))  //色波死苦ruai波 //单词订阅
    }
    render() { 
        return ( 
            <div className="index">
                <div>Todos</div>
                <Input></Input>
                {
                    this.state.items.map((item,index)=>{
                        return(
                            <TodosList
                            title = {item.title}
                            key={item+index}
                            index={index}
                            item={item}
                            isChose={item.isChose}
                            ></TodosList>
                        )
                    })
                }
                <Footer></Footer>
            </div>
         );
    }
    //更新state 订阅模式
    storeChange(){
        this.setState(store.getState())
    } 
}
 
export default Todos;
