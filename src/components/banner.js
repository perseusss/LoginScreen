import React, {Component} from 'react';
import  {Text, View,StyleSheet} from  'react-native';

class Banner extends Component{
    render(){
        return(
            <View style = {styles.bannerContainer}>
                <Text style= {styles.bannerText}>{this.props.text}</Text>
            </View>

        )
    }
} 

const styles = StyleSheet.create({
    bannerContainer:{
        width:'auto',
        height:370,
        backgroundColor:'#E87B79',
        justifyContent:'center',
        alignItems:'center'

    },
    bannerText:{
        padding:20,
        fontSize:34,
        color:'white',
    }


})

export default Banner;