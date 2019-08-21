// 这个js用来处理派发过来的任务

// 导入food和foodtype文件夹下的reducer
// as 后面的key相当于前面reducer的别名，可以用别名代替reducer作为名称
// 用as写法的时候不能写路径到具体文件，应该到该reducer的根目录即可，不然就会报错
import {reducer as food} from '../views/food';
import {reducer as foodtype} from '../views/foodtype';
import {reducer as hotlist} from '../views/hotlist';
import {reducer as home} from '../views/home';
import {reducer as setting} from '../views/setting';

// alert(foodtype);
// 导入reducer状态管理组件，用来合并多个reducer
import {combineReducers} from 'redux';

var reducer = combineReducers({
    food,
    foodtype,
    hotlist,
    home,
    setting
})

export default reducer;