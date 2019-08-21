import React, { Component } from 'react';

import {
    View, Text, Alert, Button, ToastAndroid, Animated, Dimensions, BackHandler, StyleSheet, ScrollView, Image, CameraRoll, DatePickerAndroid,
} from 'react-native';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),    // 设置初始值
            width: new Animated.Value(0),
            height: new Animated.Value(0),
            photos: []
        }

    }

    // 点击加载本地图片button的方法
    _handleButtonPress = () => {
        // getPhotos为CameraRoll里自带方法，功能是获取本地图片或者视频
        CameraRoll.getPhotos({
            // first为加载几张本地图片
            first: 2,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

    

    clicks = () => {
        ToastAndroid.showWithGravity(
            '再点我就报警了',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }

    alerts = () => {
        Alert.alert(
            '警告',
            '选择你想要做的事',
            [
                { text: '让我再想想', onPress: () => console.log('Ask me later pressed') },
                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: '确定', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    componentDidMount() {
        // 获取设备宽高
        let { width } = Dimensions.get("window");
        let { height } = Dimensions.get("window");
        Animated.timing(         // timing方法使动画值随时间变化
            this.state.fadeAnim,        // 要变化的动画值
            {
                toValue: 1,             // 最终的动画值
                duration: 1000          // 让动画持续一段时间
            }
        ).start();

        Animated.timing(         // timing方法使动画值随时间变化

            this.state.width,           // 要变化的动画值
            {
                toValue: width,            // 最终的动画值
                duration: 1000,         // 让动画持续一段时间
            },

        ).start();

        Animated.timing(         // timing方法使动画值随时间变化
            this.state.height,
            {
                toValue: height,            // 最终的动画值
                duration: 1000,         // 让动画持续一段时间
            }
        ).start();

        // 生命周期初始化监听返回按钮
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", function () {
            alert("点击了返回按钮")
        });

        // 安卓的日期选择器
        try {
            const { action } = DatePickerAndroid.open({
                // 要设置默认值为今天的话，使用`new Date()`即可。
                // 下面显示的会是2020年5月25日。月份是从0开始算的。
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }

        // google定位API
        navigator.geolocation.getCurrentPosition((pos) => {
            alert(JSON.stringify(pos));
        })

        
    }

    // 生命周期将要消亡阶段取消监听器
    componentWillUnmount() {
        // 取消安卓返回功能键的监听
        this.backHandler.remove();

        // 取消键盘监听
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        // 监听手机返回键

        return (
            
            <Animated.View style={{ marginTop: 30, opacity: this.state.fadeAnim, width: this.state.width, height: this.state.height, backgroundColor: "#eee" }}>
                <View>
                    <Text>详情页</Text>
                    <Text>{this.props.navigation.state.params.id}</Text>
                    <Button title="安卓自带弹窗测试" onPress={this.clicks} />
                    <Button title="警告框测试" onPress={this.alerts} />
                </View>

                {/* 相册DOM代码 */}
                <View style={styles.container}>
                    <Button title="加载本地图片" onPress={this._handleButtonPress} />
                    <ScrollView>
                        {/* p是获取的本地图片的总量，就是上面CameraRoll.getPhotos对象里的first的值 */}
                        {this.state.photos.map((p, i) => {
                            return (
                                console.log(p),
                                <Image
                                    key={i}
                                    style={{
                                        width: 300,
                                        height: 100,
                                    }}
                                    source={{ uri: p.node.image.uri }}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
                
            </Animated.View>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Detail;