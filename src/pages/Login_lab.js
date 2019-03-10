import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native'
import {Actions} from 'react-native-router-flux'


import Form from '../components/Form'

export default class Login extends Component {
    signup(){
        Actions.signup()
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/girlwithumbrella.jpg')}
                style={[styles.bgImage, styles.fixed]}/>
                <ScrollView style={[styles.scrollview, styles.fixed]}>
                    <View style={styles.scrollContainer}>
                        <View style={styles.containerLogo}>
                            <Text style={styles.logoText}>- NATIVE -</Text>
                        </View>
                        <Form type="Login"/>
                        <View style={styles.signupTextCont}>
                            <Text style={styles.signupText}>Don't have an account yet?</Text>
                            <TouchableOpacity onPress={this.signup}>
                                <Text style={styles.signupButton}> Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    scrollContainer:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    bgImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    scrollview: {
        flex: 1,
        backgroundColor: '#fcf',
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
        fontSize: 16,
    },
    signupButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    }
});
