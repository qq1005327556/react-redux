//1 引入 React
import React, { Component } from 'react'
import './style.css' //引入样式
//引入组件
import Input from './Input'
import TodosList from './TodosList'
import Footer from './Footer'
//引入仓库
// import store from './store/index' //默认引入store/index  前提是store是个文件夹并且index.js里面有export的东西

//@Crawford:引入connect方法
import { connect } from 'react-redux'

//2创建组件
class Todos extends Component {
  constructor(props) {
    //constructor 啃死chua科特 //构造
    super(props)
    //赋值给this.state
    // this.state = store.getState()
    //订阅模式
    // store.subscribe(this.storeChange.bind(this))  //色波死苦ruai波 //单词订阅
  }

  render() {
    //@Crawford:这里可以把props打出来看一下
    console.log('propssssssssssssssssss:', this.props)
    //@Crawford:从props中取到state
    const { items } = this.props
    return (
      <div className="index">
        <div>Todos</div>
        <Input></Input>
        {/* {this.state.items.map((item, index) => {
          return (
            <TodosList
              title={item.title}
              key={item + index}
              index={index}
              item={item}
              isChose={item.isChose}
            ></TodosList>
          )
        })} */}
        {//@Crawford:用items渲染组件
        items.map((item, index) => {
          return (
            <TodosList
              title={item.title}
              key={item + index}
              index={index}
              item={item}
              isChose={item.isChose}
            ></TodosList>
          )
        })}
        <Footer></Footer>
      </div>
    )
  }
  //更新state 订阅模式
  // storeChange(){
  //     this.setState(store.getState())
  // }
}
//@Crawford:将需要用到的state映射到组件的props中
const mapState2Props = state => {
  return {
    items: state.items
  }
}
//@Crawford:connect方法的作用是将组件与redux的store进行一个绑定操作
export default connect(mapState2Props, null)(Todos)
