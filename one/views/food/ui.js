// 此文件用来写ui
import React, { Component } from 'react';
// Dimensions可以用来获取设备屏幕的宽高
// TouchableNativeFeedback可以用来处理改变state的值，当state的值发生变化 的时候，可以渲染不同页面的jsx表达式
import { Text, View, Image, TextInput, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native';
import styles from './styles';
// import axios from 'axios';

class Food extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        // 获取设备的屏幕宽度
        let { width } = Dimensions.get("window");
        // 设置图片宽高
        let imgWidth = (width - 20) / 3 - 10;
        let imgHeight = (width - 20) / 3 - 10;

        return (
            // 整个页面
            <View style={styles.container}>

                {/* 顶部搜索区 */}
                <Image source={require('../../imgs/tp.png')} style={{ width: width, height: 200 }} />
                {/* 这里面的width是上面获取到的屏幕的宽度 */}
                <TextInput placeholder='请输入你要查找的美食' style={[styles.text, { top: width * 0.3, width: width - 80 }]} />

                {/* 中间美食列表 */}
                <ScrollView style={styles.content}>
                    <View style={styles.list}>
                        {
                            this.props.categories.map((item) => {
                                // 将获取到的数据遍历出来
                                return (
                                    <TouchableNativeFeedback key={item.id} onPress={()=>{
                                        // 调用Home页面Food组件后的navigate方法，然后传入参数，第一个参数是要跳转的页面，对应App.js页面跳转页面的名字，第二个参数是要传入到跳转页面的参数和对应的值
                                        this.props.navigate("FoodType",{id:item.id})}}>
                                        <View >
                                          <Image source={{uri:item.imgUrl}} style={[{width:imgWidth,height:imgHeight},styles.img]}/>
                                          <Text style={styles.text1}>{item.title}</Text>
                                       </View>
                                    </TouchableNativeFeedback>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )


    }
}


// 合并接受数据组件、派发任务组件、ui组件
export default Food;
