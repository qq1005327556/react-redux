//1 创建 store
import{ createStore } from 'redux';

//2 引入 管理者 reducer.js
import reducer from './reducer';

//3 注入 
const store = createStore(
    reducer,
    //使用redux-dev-tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )

//4 暴露出去 
export default store

//redux 的工作流程 
//React Components (组件)-->ActionCreators(状态发生改变)-->Store(仓库)--->去找管理者reducer.js
//--->管理者返回给Store(仓库)---->最后返回给 React Components(组件)