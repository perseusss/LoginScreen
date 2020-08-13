import React from 'react';
import {Text,TextInput,StyleSheet,View,onChangeText} from 'react-native';

const Input = ({text ,inputPlaceholder,onChangeText,value,secureTextEntry}) => {
    const {inputWrapper,textStyle,inputStyle,} = styles;
    return(
        <View style = {inputWrapper}>
          <Text style= {textStyle}>{text}</Text>
          <TextInput style = {inputStyle}
                     secureTextEntry={secureTextEntry}
                     placeholder={inputPlaceholder}
                     onChangeText = {onChangeText}
                     value = {value}/>
        </View>

    );
}
const styles = StyleSheet.create({
    inputWrapper:{
        height:60,
        flexDirection:'row',
        padding:20,
        width:'auto',
        borderColor:'black',
        borderBottomWidth:0.5

    },
   
    textStyle:{
        flexGrow:1,
        fontSize:17
      
    },
    inputStyle:{
        paddingLeft:29,
        flexGrow:2
        
    }
})
export{Input}