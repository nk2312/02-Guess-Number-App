import React from 'react';
import {View,StyleSheet} from 'react-native';

function Card({children}) {
  return (
    <View style={styles.inputNumberContainer}>
        {children}
    </View>
  )
}

export default Card

const styles=StyleSheet.create({
    inputNumberContainer:{
        backgroundColor:'#72063c',
        marginTop:50,
        padding:10,
        marginHorizontal:24,
        borderRadius:5,
        elevation:8,
        shadowColor:"#131318",
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        alignItems:'center'
     },
})