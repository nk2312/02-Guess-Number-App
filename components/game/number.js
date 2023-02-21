import React from 'react'
import { Text ,StyleSheet,View} from 'react-native';

function Number({children,style}) {
  return (
    <View style={[styles.container,style]}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Number;

const styles=StyleSheet.create({
    container:{borderColor:'#ddb52f',
borderRadius:4,
borderWidth:2,
margin:40,
padding:25
},
    text:{
        textAlign:'center',
        fontSize:32
    }
})