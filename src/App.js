import React , {Component} from  'react';
import firebase from 'firebase';
import  {Text, View, StyleSheet, Button} from  'react-native';
import Banner from './components/banner';
import LoginForm from './components/LoginForm';
import {Spinner} from './components/common'

 class App extends Component {
     state = {
         loggedIn :null,
     }

     componentDidMount(){
         firebase.initializeApp({
            apiKey: "AIzaSyB5W-qcnmyihqvGCVKRyN_aCuor7bgtzD8",
            authDomain: "myapp-project-123.firebaseapp.com",
            databaseURL: "https://myapp-project-123.firebaseio.com",
            projectId: "myapp-project-123",
            storageBucket: "myapp-project-123.appspot.com",
            messagingSenderId: "65211879809",
            appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
            measurementId: "G-8GSGZQ44ST"
         });

         firebase.auth().onAuthStateChanged((user) => {
             const loggedIn = user ? true : false;

             this.setState({
                 loggedIn
             })
         })
     }

     renderContent(){
         const{loggedIn} = this.state;

        switch(loggedIn){
            case true:
            return(
                <Button onPress = {() => firebase.auth().signOut()} title = 'logout' color = 'blue' />
             )
            case false:
                return(
                    <LoginForm />
                 )
            default:
                return(
                    <Spinner />
                )
        }
        
     }
    render(){
        return(
            <View style = {styles.AppContainer}>
                <Banner text = 'Login Screen' />
                {this.renderContent()}
                
            </View>
        )
    }
}
export default App;

const styles = StyleSheet.create({
    AppContainer:{
        backgroundColor:'#F3F3F3',
        flex:1,
    }
})