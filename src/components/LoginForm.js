import React, {Component} from 'react';
import  {Text, View, StyleSheet, Button} from  'react-native';
import firebase from 'firebase';
import {Input ,Spinner} from './common';

class LoginForm extends Component{
    state = {
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onButtonClicked = () => {
        const {email,password} = this.state;

        this.setState({
            error :'',
            loading:true
        })

        firebase.auth().signInWithEmailAndPassword(email,password).then((result) => {
            console.log("resultaaaa", result)
            if(result.user) {
                this.onLoginSucces()
            }
        }).catch((err) =>{
            console.log("err", err)
            
            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
                
                this.onLoginSucces();
            }).catch((result)=>{
                if(!result.user){
                this.onLoginFailed();
                }
            })
        });
    }
    onLoginSucces = () => {
        alert("başarılı")
        this.setState({
        email:'',
        password:'',
        error:'',
        loading:false
        })
    }
    onLoginFailed(){
        this.setState({
            error : 'giriş başarısız',
            loading:false
        })
    }

    render(){
        const {error,loading} = this.state;
        const errorMsg = error?(
        <Text style = {styles.errorStyle}>{error}</Text>
        ):
        null;

        const loadingButton = loading ? (
            <Spinner />
        ) :(<Button onPress={this.onButtonClicked} color = 'white' title = 'Login'/> )

        return(
        <View style = {{padding:30}}>  
            <View> 
                <Text>Email :</Text> 
                <Input inputPlaceholder='Enter an Email'
                        onChangeText={(text)=>{
                            this.setState({
                                email:text
                            })
                        }} 
                        value ={this.state.email} />
            </View>
            <View style = {{paddingTop:10}}>  
                <Text>Password : </Text> 
                <Input inputPlaceholder='Enter password'
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }} 
                        secureTextEntry
                        value ={this.state.password}> </Input>
            </View>
            {/* hatayı ekrana gösterceğimiz alanı yazıyoruz. (error değeri doluysa gözükecek) */}
                    <View>{errorMsg}</View>
            <View style ={styles.buttonWrapper} >
                {loadingButton}
            </View>
        </View>

        )
    }
}
export default LoginForm;
const styles = StyleSheet.create({
    buttonWrapper:{
        borderWidth:0.5,
        marginTop:20,
        backgroundColor:'blue',
        borderRadius:15
    },
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:8,
        alignSelf: 'center'
    }
})