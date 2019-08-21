import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

     },
  text:{
     position:'absolute',
     zIndex:10,
     height:40,
     lineHeight:40,
     marginLeft:40,
     borderRadius:8,
     backgroundColor:'#fff',

  },
  content:{
     flex:1,
    
     marginLeft:10,
     marginRight:10,
     marginTop:5,
     marginBottom:20
  },
  list:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
  },
  img:{
      marginLeft:10
  },
  text1:{
     textAlign:'center'
  },
  foot:{
    display:'flex',
    flexDirection:'row',
    position:'absolute',
    bottom:-16
    
     
  },
  footItem:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     height:60,
     lineHeight:60
  }
});

export default styles;