import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import Title from './Title'

export default class HeaderInfo extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/girlwithumbrella.jpg')} style={styles.headerBackground}>
                <Title />
                <View style={styles.header}>
                    <View style={styles.profileWrap}>
                        <Image style={styles.profilePic} source={require('../images/back_spring.jpg')}/>
                    </View>
                    <Text style={styles.name}>LuuSean</Text>
                    <Text style={styles.pos}> - APP FIND PHARMACY - </Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    headerBackground:{
        flex:1,
        width: null,
        alignSelf: 'stretch'
    },
    header:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: moderateScale(20),
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    profileWrap: {
        width: scale(100),
        height: scale(100),
        borderRadius: 100,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: moderateScale(16),
    },
    profilePic: {
        flex:1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: moderateScale(4)
    },
    name: {
        marginTop: scale(20),
        fontSize: moderateScale(16),
        color: '#FFFFFF',
        fontWeight: '400'
    },
    pos: {
        fontSize: moderateScale(14),
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic',
    }
})
