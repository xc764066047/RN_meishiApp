import React, { Component } from 'react';
// Switch DOM组件是开关按钮
import { View, Text, Switch, Keyboard, TextInput, } from 'react-native';
import { connect } from 'react-redux';
import actionCreator from './actionCreator'

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '请在这里输入内容' 
        };
    }

    componentDidMount() {
        // 监听用户的键盘
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',      // 监听键盘显示事件
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',      // 监听键盘隐藏事件
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        // 移除监听器
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    // 监听键盘事件的方法
    _keyboardDidShow() {
        alert('键盘显示');
    }

    _keyboardDidHide() {
        alert('键盘隐藏');
    }

    render() {
        return (
            <View>
                <Text>是否显示附近的美食</Text>
                {/* value属性可以改变开关的状态 */}
                {/* onValueChange是开关按钮改变触发的事件,打开开关传递的value是true，关闭开关传递的value是false，经过redux传递给value属性改变开关状态 */}
                <Switch value={this.props.value} onValueChange={(value) => { this.props.changeNear(value) }} />

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
            </View>
        )
    }
}


var mapState = (state) => ({
    value: state.setting.isNear
})

var mapDispatch = (dispatch) => ({
    changeNear(value) {
        dispatch(actionCreator.changeNearAction(value))
    }
})

// connect是合并高阶函数的组件，三个方法合并在一起形成了高阶函数，高阶组件同理
export default connect(mapState, mapDispatch)(Setting);