
var defaultState={
	refresh:false,
	list:[]

}


const reducer = (state=defaultState,action)=>{
      
      if(action.type==='GETLIST'){
			// alert(action.cover)
			// alert(action.list)
      		let newState={};
      		if(action.cover){
				//   console.log(action.list)
				newState={
					list:[...action.list],
					refresh:false
				} 
			}//第一次加载
			else{
				newState={
					list:[...state.list,...action.list],
					refresh:false
				}
			}
      		//alert(JSON.stringify(newState))
      		return newState;
      }

      else if(action.type==="REFRESH"){
		   //alert(action.value)
      	   let newState={};
      	   newState={
      	   	  list:[...state.list],
				   refresh:action.value
      	   }
      	   return newState;
      }


      return state;

}

export default reducer;