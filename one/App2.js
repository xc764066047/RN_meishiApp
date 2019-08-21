import React, { Component } from 'react'

// 导入这些dom组件
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight, ScrollView, FlatList, TouchableNativeFeedback } from 'react-native'
// ScrollView   类似加了overflow:auto，但是有个缺点，看不到的内容也会加载到里面
// 使用FlatList 可以解决ScrollView的缺点

// 定义App类组件
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ['1','23',,'23','23','23','23','23','23','23','23','23','23','23','23'],
            inputValue: '' //  文本框里的值
        };

        this.input = this.input.bind(this);
        this.add = this.input.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        if (this.state.inputValue !== "") {
            // 如果文本输入框不为空，就更新state
            this.setState((PrevState) => ({
                // ...是es6的克隆方法,PrevState是上一个数据，this.state.inputValue是新增的数据，这样就完成了在数组里添加数据的操作
                arr: [...PrevState.arr, this.state.inputValue],

                // 更新完成后要清空文本框里的值
                inputValue: ''
            }))
        } else {
            alert("不能为空")
        }
    }

    removeItem(index){
        var arr = [...this.state.arr];
        arr.splice(index,1)
        this.setState({
          arr
        })
    }

    add() {
        alert(666);
    }

    input(value) {
        // 改变状态值用setState
        this.setState({
            inputValue: value
        })
    }

    componentDidMount() {

        // var url1="https://www.easy-mock.com/mock/5d0b9be54313dd072bf93322/example/kangbazi";
        // var url2="http://127.0.0.1:3000";
        // fetch(url2)
        // .then((res)=>{
        //     return res.json()
        // }).then((res)=>{
        //     console.log(res)
        //       this.setState({
        //          arr:res.data.list
        //          arr:res.list
        //       })
        // })

        // axios.get("https://www.easy-mock.com/mock/5d0b9be54313dd072bf93322/example/kangbazi")
        //   .then((res)=>{
        //      this.setState({
        //         arr:res.data.list
        //      })
        //   })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopArea}>
                    <TextInput style={styles.TextInput} placeholder="请输入文本" onChangeText={this.input} value={this.state.inputValue} />
                    <TouchableHighlight style={styles.add} onPress={this.addItem}>
                        <View>
                            <Text>添加</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/* <ScrollView style={styles.box}>
                  {
                    this.state.arr.map((item,index)=>{
                        return <Text key={index}>{index+1}{item}</Text>
                    })
                  }
              </ScrollView> */}
              {/* 长列表Flatlist里面必须要有两个属性，data和renderItem */}
                <FlatList style={styles.box} keyExtractor={(item, index) => item + index} data={this.state.arr} renderItem={({ item, index }) => <TouchableNativeFeedback onPress={this.removeItem.bind(this, index)}> <View><Text >{index + 1}{item}</Text></View></TouchableNativeFeedback>} />
            </View>
        )
    }

}

export default App;

var styles = StyleSheet.create({   //创建样式对象
    container: {
        marginTop: 30,
    },
    box: {
        top: 30,
        height: 150,
        backgroundColor: "#F00",
    },
    TopArea: {
        height: 30,
        top: 10
    },
    TextInput: {
        height: 20,
        lineHeight: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    add: {
        position: 'absolute',
        top: 2,
        right: 20,
    }
})