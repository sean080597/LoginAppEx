import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// import jwt_decode from 'jwt-decode'
import HeaderInfo from '../components/HeaderInfo';

export default class Profile extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         first_name: '',
    //         last_name: '',
    //         email: ''
    //     }
    // }

    // componentDidMount(){
    //     const token = localStorage.userToken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         first_name: decoded.first_name,
    //         last_name: decoded.last_name,
    //         email: decoded.email
    //     })
    // }

    render() {
        return (
            <View style={styles.container}>
                <HeaderInfo />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
