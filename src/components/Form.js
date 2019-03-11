import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-native-elements';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import EL_Input from './EL_Input'

const api = user => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(user.email === 'Cuong.luusean@gmail.com'){
            reject({ email: 'Email already used' })
        }else{
            resolve()
        }
    }, 3000)
})

export default class Form extends Component {
    constructor(props){
        super(props);
    }

    _handleSubmit = async (values, bag) => {
        try {
            await api(values)
            Alert.alert('Welcome')
        } catch (error) {
            bag.setSubmitting(false)
            bag.setErrors(error)
        }
    }

    render() {
        return (
            <View>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    onSubmit={this._handleSubmit}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Not valid email').required('Email is required'),
                        password: Yup.string().min(6).required('Password is required'),
                        confirmPassword: this.props.type != 'Login' ? Yup.string().oneOf(
                            [Yup.ref('password', null)],
                            'Confirm Password must matched Password'
                        ).required('Confirm Password is required') : null
                    })}
                    render={({values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid, isSubmitting}) => (
                        <React.Fragment>
                            <View style={styles.container}>
                                <EL_Input placeholder="Email" keyboardType="email-address"
                                    leftIcon={{ type: 'font-awesome', name: 'at', color: '#616161'}}
                                    value={values.email} name="email" onChange={setFieldValue}
                                    error={touched.email && errors.email}
                                    onTouch={setFieldTouched}/>
                                <EL_Input placeholder="Password" keyboardType="default"
                                    leftIcon={{ type: 'font-awesome', name: 'key', color: '#616161'}}
                                    value={values.password} name="password" onChange={setFieldValue} secureTextEntry
                                    error={touched.password && errors.password}
                                    onTouch={setFieldTouched}/>
                                {this.props.type != 'Login' &&
                                <EL_Input placeholder="Confirm password" keyboardType="default"
                                    leftIcon={{ type: 'font-awesome', name: 'key', color: '#616161'}}
                                    value={values.confirmPassword} name="confirmPassword" onChange={setFieldValue} secureTextEntry
                                    error={touched.confirmPassword && errors.confirmPassword}
                                    onTouch={setFieldTouched}/>}
                            </View>
                            <Button title="Submit" type="solid" buttonStyle={styles.btnContainer} titleStyle={styles.btnText}
                            onPress={handleSubmit} disabled={!isValid || isSubmitting} loading={isSubmitting}/>
                        </React.Fragment>
                    )}
                />
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
