import React, { Component } from 'react';
import store from './store'
class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        
    }
    render() { 
        return ( 
            <div className='listItem'
            //onMouseOver = {this.mouseOve.bind(this)} //移入  
            //onMouseOut = {this.mouseOut.bind(this)}  //移出
            >
                <div>
                    <input
                    type = 'checkbox'
                    onChange = {this.toggle.bind(this,this.props.index)}
                    //isChose 是true 选中 不是true 不选中
                   checked={this.props.isChose ? true:false}
                    />
                    <span> {this.props.title} </span>                
                    <button 
                    onClick = {this.delete.bind(this,this.props.index)}
                    >删除</button>
                </div>
            </div>
         );
    }
    //删除
    delete(index){
        const action ={
            type : 'delete',
            index
        }
        store.dispatch(action)
    }
    //选中
    toggle(index){
        const action ={
            type : 'chose',
            index
        }
        store.dispatch(action)
    }
}
 
export default TodosList;