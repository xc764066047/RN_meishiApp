import React, { Component } from 'react';
import {connect} from 'react-redux';
// 导入分发任务组件
// import { bindActionCreators } from 'redux';

// 导入任务派发组件actionCreator
import actionCreator from './actionCreator';
// 从目标文件导入的名字可以自定义，不一定要和export导出的名字相同
import Ui from './ui';


// // 合并接受数据组件、派发任务组件、ui组件
// export default connect((state)=>stat e, (dispatch)=>bindActionCreators(actionCreators, dispatch))(Food);

// 用于获取状态数据
var mapState=(state)=>({
    categories:state.food.categories
})

// 用于派发任务
var mapDispatch=(dispatch)=>({
  // 第一个getList()是生命周期componentDidMount里的方法
    getList(){
      dispatch(actionCreator.getList())
   }
 })

//  合并导出
 export default connect(mapState,mapDispatch)(Ui);
