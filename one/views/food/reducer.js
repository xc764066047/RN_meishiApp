// 此文件用来处理food页面的任务

// 初始列表数据
var defaultState ={
	categories:[]
}

var reducer = (state=defaultState,action)=>{

    var newState={...state};

    if(action.type==="GET_CATEGORIES"){
          newState.categories=[...action.list]
    }

    return newState;

}

export default reducer;