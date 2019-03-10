import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class EL_Input extends PureComponent {
  state = {}
  render() {
    const { input_type, placeholder, icon_name } = this.props
    return (
      <View style={styles.root}>
        <Input
          // label={label}
          placeholder={placeholder}
          leftIcon={{ type: 'font-awesome', name: icon_name, color: '#616161'}}
          inputStyle={styles.inputBox}
          inputContainerStyle={styles.inputContainer}
          keyboardType={input_type}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          selectionColor='rgba(0, 0, 0, 0.5)'
          placeholderTextColor='rgba(0, 0, 0, 0.3)'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignSelf: 'center',
  },
  inputContainer:{
    height: moderateScale(40),
    padding: moderateScale(15),
    paddingHorizontal: 0,
    marginBottom: verticalScale(10),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  inputBox: {
    fontSize: moderateScale(17),
  },
})
