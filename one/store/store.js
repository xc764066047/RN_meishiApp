// 这个js用来当做state仓库,同时充当中转站的角色，比如拿来保存旧的state，转发从actionCreator派发过来的任务到reducers中，然后保存reducers返回的newState，再将newState传递给组件

// 通过中间件applyMiddleware的方式来引用thunk组件，可以让dispatch接收函数
import {createStore,applyMiddleware} from 'redux';
import reducer from "./reducers";
import thunk from 'redux-thunk'

var store =createStore(reducer,applyMiddleware(thunk));

// store在app.js里绑定，通过Provider元素可以将数据传递给ui组件
export default store;