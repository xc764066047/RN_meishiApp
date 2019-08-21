
export default {

    getListAction(list,cover){
		// console.log(list)
    	return {
    		type:'GETLIST',
			list,
			cover
    	}
    },

    refreshAction(value){
          return {
          	  type:'REFRESH',
          	  value
          }
	},
	// 下拉列表刷新的方法
	getData(navigation,cover){
		return (dispatch)=>{
			   var host = "https://www.easy-mock.com/mock/5d12e0c00e92257276a5a749/App/";
		       var url = host + 'hotlist'// 如果没有navigation传递过来id就加载
			   fetch(url).then((res)=>res.json()).then((res)=>{
				// alert(cover);
				dispatch(this.getListAction(res.data.list,cover))
		 })
		}
	}
}

