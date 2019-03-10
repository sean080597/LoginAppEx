import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

import Form from '../components/Form'

export default class Signup extends Component {

    constructor(props){
        super(props);
    }

    goBack(){
        Actions.pop();
    }

    render() {
        return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/girlwithumbrella.jpg')} style={styles.bgImage}>
                <View style={styles.containerLogo}>
                    <Text style={styles.logoText}>- NATIVE -</Text>
                </View>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.signupButton}> Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        )
    }

    register = () => {
        alert(this.state.confirmPassword);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        width: null,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    containerLogo: {
        alignItems: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 20,
    },
    signupTextCont: {
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    }
});
