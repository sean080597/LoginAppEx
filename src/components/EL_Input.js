import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class EL_Input extends PureComponent {
  _handleChange = (value) => {
    this.props.onChange(this.props.name, value);
  }

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  }

  render() {
    const { error, ...rest } = this.props
    return (
      <View style={styles.root}>
        <Input
          // label={label}
          {...rest}
          inputStyle={styles.inputBox}
          inputContainerStyle={styles.inputContainer}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          selectionColor='rgba(0, 0, 0, 0.5)'
          placeholderTextColor='rgba(0, 0, 0, 0.3)'
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          errorMessage={error}
          containerStyle={styles.container}
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
  container:{
    marginBottom: moderateScale(10)
  },
  inputContainer:{
    height: moderateScale(40),
    padding: moderateScale(15),
    paddingHorizontal: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  inputBox: {
    fontSize: moderateScale(17),
  },
})
