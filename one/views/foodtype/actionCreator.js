
const actionCreator = {
    getListAction(list,cover){
		// console.log(list)
		// console.log(typeof list)
    	return {
    		type:'GETLISTFOOD',
			list,
			cover
    	}
    },

    refreshAction(value){
        return {
              type:'REFRESHFOOD',
              value
        }
    },
	// https://www.easy-mock.com/mock/5d12e0c00e92257276a5a749/App/
	// 下拉列表刷新的方法
    getData(navigation,cover){
		return (dispatch)=>{
			   var host = "https://www.easy-mock.com/mock/5d12e0c00e92257276a5a749/App/";
               var id = navigation.state.params.id;
			   url = host +'categoryList?id='+id;
			   
		      fetch(url).then((res)=>res.json()).then((res)=>{
					//  alert(cover);
		             dispatch(this.getListAction(res.data.list,cover))
		      })
		}
	}
}


export default actionCreator;