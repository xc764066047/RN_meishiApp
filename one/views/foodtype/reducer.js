
var defaultState = {
	refresh: false,
	list: []

}


const reducer = (state = defaultState, action) => {
	if (action.type === 'GETLISTFOOD') {

		let newState = {};
		if (action.cover) {	// 如果cover为true，说明正在更新数据，且为为第一次加载更新，然后再把refresh改为false，表明可以更新数据了
			newState = {
				list: [...action.list],
				refresh: false
			}
		}
		else {
			newState = {
				list: [...state.list, ...action.list],
				refresh: false
			}
		}
		// alert(JSON.stringify(newState))
		return newState;
	}

	else if (action.type === "REFRESHFOOD") {
		//    alert("拿到了数据"+action.value)
		let newState = {};
		newState = {
			list: [...state.list],
			refresh: action.value
		}
		return newState;
	}


	return state;

}

export default reducer;