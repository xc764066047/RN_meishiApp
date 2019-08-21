import {CHANGENEAR} from './const';
// 导入异步缓存组件
import {AsyncStorage} from 'react-native';

var defaultState = {
    isNear: true
}

var reducer = (state = defaultState, action) => {
    var newState = {...state};
    if(action.type === CHANGENEAR) {
        AsyncStorage.setItem("near", action.value.toString());
        newState.isNear = action.value;
        // alert(newState.isNear == true?"已打开附近美食":"已关闭附近美食");
    };

    return newState;
}

export default reducer;