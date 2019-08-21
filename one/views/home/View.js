// 此文件是首页页面，需要导入食品列表页面和食品分类页面

import React, { Component } from 'react';
import { Image } from 'react-native';
// 跳转到新页面会保留的导航栏，也就是这个app底部的导航栏
import TabNavigator from 'react-native-tab-navigator';
import { Food } from '../food';
import { Hotlist } from "../hotlist";
import { Map } from "../map";
import {Setting} from "../setting"
import actionCreator from './actionCreator';
import {actionCreatorSet} from '../setting'
import {connect} from 'react-redux';
// 导入异步缓存组件
import {AsyncStorage} from 'react-native';

// 定义Home组件
class Home extends Component {
    // 设置react-navigation中的顶部导航栏，要用static。navigation是导航的意思。这是react-navigation里的导航栏设置，也就是这个app里的顶端导航栏
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#f4511e',
            height: 30,
        },
        headerTitle: "饱了么",
        headerTitleStyle: {
            color: "#fff",
        },
        
    };

    constructor(props) {
        super(props);
        
        AsyncStorage.getItem("near", (err, value)=> {
            this.props.changeNear(value);
        })
        // 通过改变底部导航的selectedTab的值跳转到指定的页面
        // 用redux也是用的这个原理
        // this.state ={
        //     selectedTab:'home'
        // }
    }


    render() {

        // near 用来实现是否渲染附近美食DOM组件
        var near = null;
        if(this.props.isNear) {
            near = (
                <TabNavigator.Item
                    selected={this.props.page === 'map'}
                    title="附近美食"
                    renderIcon={() => <Image source={require("../../assets/icon.png")} style={{ width: 20, height: 20 }} />}
                    onPress={() => this.props.changePage('map')}>
                    <Map />
                </TabNavigator.Item>
            )
        }

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.props.page === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={require("../../imgs/home1.png")} style={{ width: 20, height: 20 }} />}
                    // 点击导航执行切换页面函数，派发切换页面任务
                    onPress={() => this.props.changePage('home')}>
                    {/* 每个导航下对应一个页面的dom组件 */}
                    <Food navigate={this.props.navigation.navigate} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.props.page === 'foodType'}
                    title="热门食品"
                    renderIcon={() => <Image source={require("../../imgs/type2.png")} style={{ width: 20, height: 20 }} />}
                    onPress={() => this.props.changePage('foodType')}>
                    <Hotlist navigate={this.props.navigation.navigate} />
                </TabNavigator.Item>

                {/* 如果设置里打开附近美食，就会渲染near */}
                { near }
                <TabNavigator.Item
                    selected={this.props.page === 'setting'}
                    title="设置"
                    renderIcon={() => <Image source={require("../../imgs/type1.png")}  style={{width:20,height:20}} />}
                    onPress={() => this.props.changePage('setting')}>
                    <Setting />
				</TabNavigator.Item>
            </TabNavigator>
        );

    }
};

// 因为connect将三个组件进行了绑定，会自动获取派发任务后的数据
var mapState = (state) => ({
    // 这里的home和setting是总的reducers里注册过的
    page: state.home.selectedTab,
    isNear: state.setting.isNear
})

var mapDispatch = (dispatch) => ({
    changePage(page) {
        dispatch(actionCreator.changPageAction(page))
    },
    changeNear(value){
        value = value === "true"? true: false;
		dispatch(actionCreatorSet.changeNearAction(value))
	}
})

// export default Home;

export default connect(mapState,mapDispatch)(Home) ;