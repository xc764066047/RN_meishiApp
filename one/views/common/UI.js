import React, { Component } from 'react';
// Dimensions可以用来获取设备屏幕的宽高
import { Text, View, Image, FlatList, TouchableNativeFeedback } from 'react-native';

import styles from './styles';
class UI extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#f4511e',
            height: 30,
        },
        headerTitle: "商品类型",
        headerTitleStyle: {
            color: "#fff",
        }
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getInitData();

    }

    render() {
        return (
            <View style={styles.container}>
                {/* FlatList里的三个参数不能忘：data,keyExtractor,renderItem */}
                <FlatList
                    onRefresh={() => { this.props.getData() }}
                    refreshing={this.props.refresh}
                    keyExtractor={(item, index) => index + item}
                    data={this.props.list}
                    renderItem={({ item }) =>
                        <TouchableNativeFeedback key={item.id} onPress={() => {
                            this.props.navigate("Detail", { id: item.id })
                        }}>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: item.imgUrl }} style={{ width: 100, height: 100 }} />
                                <View style={item.info}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.desc}>{item.desc}</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    }
                />
            </View>
        )
    }
}


export default UI;
