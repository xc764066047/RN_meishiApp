import React,{Component} from 'react';
import {WebView} from 'react-native';

class Map extends Component{
    render(){
        return(
            <WebView source={{ uri:"https://map.baidu.com/" }} style={{width:'100%',height:"100%"}}></WebView>
        );
    }
}

export default Map;