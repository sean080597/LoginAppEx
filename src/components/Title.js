import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header} from 'react-native-elements'
import { moderateScale } from 'react-native-size-matters';

export default class Title extends Component {
    render() {
        return (
            <View>
                <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    marginTop: moderateScale(-20),
                    borderBottomWidth: 0 //remove white border
                  }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
