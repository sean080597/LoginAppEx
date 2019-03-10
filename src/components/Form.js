import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import {withFormik} from 'formik'
import Yup from 'yup'
import { Button } from 'react-native-elements';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import EL_Input from './EL_Input'

export default class Form extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <EL_Input lable="Email" placeholder="Enter email" icon_name="at" input_type="email-address"/>
                    <EL_Input lable="Password" placeholder="Enter password" icon_name="key" input_type="default"/>
                    {this.props.type != 'Login' && <EL_Input label="ConfirmPassword" placeholder="Enter confirm password"/>}
                </View>
                <Button title="Submit" type="solid" buttonStyle={styles.btnContainer} titleStyle={styles.btnText}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: moderateScale(20),
        padding: moderateScale(15),
        paddingBottom: 0,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    btnContainer: {
        margin: moderateScale(20),
        marginVertical: 0,
        padding: moderateScale(15),
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    btnText: {
        fontSize: moderateScale(20, 0.4),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#616161'
    },
});
