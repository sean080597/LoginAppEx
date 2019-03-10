import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import InputValidation from 'react-native-input-validation'

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        };
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <InputValidation validator="username"
                    onValidatorExecuted={isValid => console.log(isValid)}
                    validatorExecutionDelay={100}
                    placeholder='Username'
                    placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    textInputContainerStyle={styles.inputBoxNew}
                    errorMessage='Username không hợp lệ'
                    errorMessageStyle={{color: 'red', padding: 0}}
                    containerStyle={styles.inputBoxContainer}
                    />
                    {/* <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0, 0, 0, 0)'
                    placeholder='Email' placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    autoCorrect={false} keyboardType='email-address'
                    selectionColor='rgba(0, 0, 0, 0.5)'
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    /> */}
                    <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0, 0, 0, 0)'
                    placeholder='Password' placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    selectionColor='rgba(0, 0, 0, 0.5)'
                    ref={(input) => this.password = input}
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    label='Password'
                    />
                    {this.props.type != 'Login' && <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0, 0, 0, 0)'
                    placeholder='Confirm Password' placeholderTextColor='rgba(0, 0, 0, 0.3)'
                    selectionColor='rgba(0, 0, 0, 0.5)'
                    secureTextEntry
                    onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                    value={this.state.confirmPassword}
                    label='Confirm Password'
                    />}
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={this.loginOrRegis}>
                    <Text style={styles.btnText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    loginOrRegis = ()=>{
        if(this.props.type == 'Login'){
            alert('Login');
            // fetch('http://192.168.1.6:4545/login', {
            //     method: "POST",
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         username: "Justin", password: "Robot"
            //     })
            // })
            // .then((response) => response.json())
            // .then((res) => {
            //     alert(res.message);
            //     // if(res.success === true){
            //     //     var username = res.message;
            //     //     //AsyncStorage to store the users username
            //     //     AsyncStorage.setItem('username', username);
            //     //     //redirect to memberarea
            //     //     this.props.navigator.push({
            //     //         id: 'Memberarea'
            //     //     });
            //     // }else{
            //     //     alert(res.message);
            //     // }
            // })
            // .done();
        }else{
             fetch('http://192.168.1.184:4545/register', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                })
            })
            .then((response) => response.json())
            .then((res) => {
                alert(res.message);
                // if(res.success === true){
                //     var username = res.message;
                //     //AsyncStorage to store the users username
                //     AsyncStorage.setItem('username', username);
                //     //redirect to memberarea
                //     this.props.navigator.push({
                //         id: 'Memberarea'
                //     });
                // }else{
                //     alert(res.message);
                // }
            })
            .done();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    inputBox: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    inputBoxContainer: {
        marginBottom: 10,
    },
    inputBoxNew: {
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    btnContainer: {
        margin: 20,
        marginVertical: 0,
        padding: 20,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
