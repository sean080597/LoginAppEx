import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Logo extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Image style={{ width: 200, height: 100 }}
            source={require('../images/mLogo_transparent_new.png')}
            />
            <Text style={styles.logoText}>Welcome to my finding Pharmacy App</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        marginVertical: 15,
    }
});
