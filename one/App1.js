// 传统的选项卡切换，IOS和安卓都兼容

import React, { Component } from 'react';
// Dimensions可以用来获取设备屏幕的宽高
// TouchableNativeFeedback可以用来处理改变state的值，当state的值发生变化 的时候，可以渲染不同页面的jsx表达式
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [],
      page:'page1', // page用来判断渲染哪个页面
    }
  }

  componentDidMount() {
    this.getFoodList();
  }

  getFoodList() {
    // 发送ajax请求
    var url = "https://www.easy-mock.com/mock/5d12e0c00e92257276a5a749/food/food";

    var url2 = "http://127.0.0.1:3000/food";
    // axios.get(url)
    //   .then((res) => {
    //     console.log(res.data.categories);
    //     this.setState({
    //       foodList: res.data.categories
    //     })
    //   })
    
    fetch(url).then((res) => { return res.json() }).then((res) => { this.setState({
        foodList: res.data.categories
      })
    })
  }

  render() {
    // 获取设备的屏幕宽度
    let { width } = Dimensions.get("window");
    // 设置图片宽高
    let imgWidth = (width - 20) / 3 - 10;
    let imgHeight = (width - 20) / 3 - 10;
    
    // renderContent用来保存渲染的页面的内容
    let renderContent = null;

    // 判断state里的page数据来渲染对应的页面
    if(this.state.page == "page1") {
      renderContent = (
        // 整个页面
        <View style={styles.container}>
          
          {/* 顶部搜索区 */}
          <Image source={require('./imgs/tp.png')} style={{ width: width, height: 200 }} />
          {/* 这里面的width是上面获取到的屏幕的宽度 */}
          <TextInput placeholder='请输入你要查找的美食' style={[styles.text, { top: width * 0.3, width: width - 80 }]} />
      
          {/* 中间美食列表 */}
          <View style={styles.content}>
            <View style={styles.list}>
              {
                this.state.foodList.map((item) => {
                  // 将获取到的数据遍历出来
                  return (
                      <View key={item.id}>
                        <Image source={{ uri: item.imgUrl }} style={[{ width: imgWidth, height: imgHeight }, styles.img]} />
                        <Text style={styles.text1}>{item.title}</Text>
                      </View>
                  )
                })
              }
            </View>
          </View>
      
          {/* 底部选项卡 */}
          <View style={styles.foot}>

            {/* TouchableNativeFeedback   可以使用这个  来处理 改变state 的值  当state的值发生变化的时候  可以渲染不同页面的 jsx 表达式  */}
            <TouchableNativeFeedback onPress= { ()=> {this.setState({page:"page1"})}}>
              <View style={styles.footItem}>
                <Text>首页</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress= { ()=> {this.setState({page:"page2"})}}>
              <View style={styles.footItem}>
              <Text>分类</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      );
    } else {  // 如果state.page的value不是page1，就渲染下面的页面
      renderContent = (

        // 整个页面
        <View style={styles.container}>
          
          {/* 顶部搜索区 */}
          <Image source={require('./imgs/tp.png')} style={{ width: width, height: 200 }} />
          {/* 这里面的width是上面获取到的屏幕的宽度 */}
          <TextInput placeholder='请输入你要查找的美食' style={[styles.text, { top: width * 0.3, width: width - 80 }]} />


          <View>
            <Text>食物分类</Text>
          </View>

          {/* 底部选项卡 */}
          <View style={styles.foot}>

            {/* TouchableNativeFeedback   可以使用这个  来处理 改变state 的值  当state的值发生变化的时候  可以渲染不同页面的 jsx 表达式  */}
            <TouchableNativeFeedback onPress= { ()=> {this.setState({page:"page1"})}}>
              <View style={styles.footItem}>
                <Text>首页</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress= { ()=> {this.setState({page:"page2"})}}>
              <View style={styles.footItem}>
              <Text>分类</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      );
    }

    // 将整个页面的内容输出
    return renderContent;
  }
}

const styles = StyleSheet.create({
  
  // 整个页面的基本样式
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

    // 顶部搜索区样式
  text:{
    position:'absolute',
    top: 0,
    zIndex:10,
    height:40,
    lineHeight:40,
    marginLeft:40,
    borderRadius:8,
    backgroundColor:'#fff'
  },


  // 中间美食列表样式
  content: {
    flex:1,
    marginLeft:5,
    marginTop:5,
    marginRight:10,
    marginBottom:20
  },
  
  list:{
    display:'flex',
    flexDirection:'row', // 主轴方向改为横向
    flexWrap:'wrap'     // 超出换行

  },
  img:{
      marginLeft:10
  },
  text1:{
    textAlign:'center'
  },


  // 底部选项卡样式
  foot: {
    display: 'flex',
    flexDirection: 'row', // 主轴方向改为横向
  },
  footItem: {
    flex: 1,
    height: 60,
    lineHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
