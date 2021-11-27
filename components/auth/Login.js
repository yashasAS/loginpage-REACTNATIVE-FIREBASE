import React, { Component } from 'react';
import { View, Button,TextInput } from 'react-native';
import firebase from 'firebase';

export class Login extends Component {
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password:''
            
        
        }
        this.onSingUp = this.onSingUp.bind(this)
    }

    onSingUp () {
        const{ email,password,name } = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result)=>{
            console.log(result)
        })
        .then((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="name"
                    onChangeText={( name ) => this.setState({ name })}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={( email ) => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={( password ) => this.setState({ password })}
                />
                <Button
                    onPress={()=> this.onSingUp()}
                    title="Sign In"
                />
            </View>
        )
    }
}


export default Login
