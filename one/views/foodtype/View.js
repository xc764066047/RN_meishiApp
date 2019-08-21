
import { connect } from 'react-redux';
import actionCreator from "./actionCreator";
import UI from "../common/UI";
import { Detail } from '../detail';

// ownProps 等同于this.props
var mapState = (state, ownProps) => {

   return {
      // 这里的foodtype是在总的reducers注册过的
      list: state.foodtype.list,
      refresh: state.foodtype.refresh,
      // navigation.navigate是在app.js里注册过的页面都具有的属性
      navigate: ownProps.navigation.navigate,
   }
}

var mapDispatch = (dispatch, ownProps) => ({

   getInitData() { //首次加载食品分类的列表

      dispatch(actionCreator.getData(ownProps.navigation, true));
   },
   // 下拉列表刷新调用的方法
   getData() { //已经有列表了，加载新的数据  refreshing 设置为true. 加载成功后，值设置false
      dispatch(actionCreator.refreshAction(true))
      dispatch(actionCreator.getData(ownProps.navigation, false));

   }


})


export default connect(mapState, mapDispatch)(UI);
