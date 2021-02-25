import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

class RandomNumber extends React.Component {
    static propTypes ={
        id:PropTypes.number.isRequired,
        number:PropTypes.number.isRequired,
        isDisabled:PropTypes.bool.isRequired,
        onPress:PropTypes.func.isRequired,
    };
  handlePress = () => {
    this.props.onPress(this.props.id);
  }
  render () {
    return (
      <TouchableOpacity onPress={this.handlePress} disabled={this.props.isDisabled}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 30,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center'
  },
  disabled: {
    opacity: 0.3
  }
})

export default RandomNumber
