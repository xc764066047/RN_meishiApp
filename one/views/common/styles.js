import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // 整个页面的基本样式
    container: {
        backgroundColor: '#fff',
    },

    pageInfo: {
        textAlign: "center",
        fontSize: 20,
    },

    listBox: {
    marginBottom: 30
    },
    
    box: {
        display: "flex",
        flexDirection:'row',
        marginTop: 2,
        backgroundColor: "#EEE",
        
    },

    info: {
        marginLeft: 10,
        paddingTop: 10
    },

    title: {
        fontSize: 16,
        marginBottom: 5
    },

    desc: {
        fontSize: 10
    }

});

export default styles;