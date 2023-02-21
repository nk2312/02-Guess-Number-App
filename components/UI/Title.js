import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

function Title({children,style}) {
  return (
        <Text style={[styles.title,style]}>{children}</Text>
  )
}

export default Title;

const styles=StyleSheet.create({
    title:{
        color:'#fff',
        borderWidth:2,
        borderColor:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        padding:15,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:10,
        fontSize:28
    }
})