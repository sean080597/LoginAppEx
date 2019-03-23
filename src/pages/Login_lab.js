import React, { Component } from 'react'
import {Text, StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, ScrollView, StatusBar} from 'react-native'
import {Actions} from 'react-native-router-flux'

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Form from '../components/Form'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }
        this.onLayout = this.onLayout.bind(this);
    }

    //detect change orientation
    onLayout(e){
        this.setState({
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        })
    }

    signup(){
        Actions.signup()
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>{this.state.width}</Text> */}
                <ImageBackground source={require('../images/girlwithumbrella.jpg')} style={styles.bgImage}
                onLayout={this.onLayout}>
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
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: StatusBar.currentHeight
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    containerLogo: {
        alignItems: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: moderateScale(40),
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: moderateScale(20),
    },
    signupTextCont: {
        justifyContent: 'center',
        marginVertical: moderateScale(16),
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
        fontSize: moderateScale(16),
        fontWeight: '500',
    }
});
