
import {connect} from 'react-redux';
import actionCreator from "./actionCreator";
import Ui from '../common/UI';


var mapState=(state)=>{
  return {
    // 这里的hotlist是总的reducers里注册的
    list:state.hotlist.list,
    refresh:state.hotlist.refresh,
  }
}

var mapDispatch=(dispatch,ownProps)=>({
       getInitData(){  //这是第一次加载,生命周期自动调用  
          dispatch(actionCreator.getData(ownProps.navigation, true)); 
       },
       // 下拉列表刷新调用的方法
       getData(){ //已经有列表了 现在要加载新的数据 
          //refreshing布尔值 false可以发送请求
          //true 不能重新加载数据
           dispatch(actionCreator.refreshAction(true))
           dispatch(actionCreator.getData(ownProps.navigation,false)); 
           //true 正在刷新 
           //false 当请求数据完成以后   我们待命 随时发送请求
       },

})

export default connect(mapState,mapDispatch)(Ui);

