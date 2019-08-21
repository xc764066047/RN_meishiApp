var defaultState = {
    selectedTab: 'home'
}

var reducer = (state = defaultState, action) => {
    var newState = {...state};
    if (action.type === "CHANGEPAGE") {
        newState.selectedTab = action.page
    }

    return newState;
}

export default reducer;