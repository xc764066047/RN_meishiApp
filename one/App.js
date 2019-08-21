import React from 'react';

// 跳转到新页面不会保留的导航栏,navigation是导航的意思
// StackNavigator是屏幕上方导航栏
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Home} from "./views/home";
import {FoodType} from "./views/foodtype";
import {Provider} from 'react-redux';
import {Hotlist} from './views/hotlist';
import {Detail} from './views/detail';
import store from './store/store'

// 创建常量保存堆栈导航，也就是在指定的页面显示导航,
// 只要是在createStackNavigator里注册的组件，都有navigation属性
// navigation里有几个参数，比如navigate能跳转到下一个页面，goBack()返回上一页（就自带的返回按钮）。state：通过这个可以拿到路由的名称，state里的params可以获取传递的参数，key为身份的标识
const MainNavigator = createStackNavigator({
  // 判断selectedTab的值来引用对应的组件，这里的第一个Home和FoodType是要跳转的页面的名字，对应Food组件下的ui文件点击跳转页面传入this.props.navigate里的值
  Home: {
    screen: Home  // 在createStackNavigator中要用screen来引用组件
  },
  FoodType:{
    screen: FoodType
  },
  Hotlist: {
    screen: Hotlist
  },
  Detail: {
    screen: Detail
  },
});

// 创建变量保存顶端导航
const App = createAppContainer(MainNavigator);
const MyApp = (Props) => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}
export default MyApp;
