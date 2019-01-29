import React, { Component } from 'react'

import { View, Text, Button } from './ProfileStyled'
import { history } from '../App'

export default class ProfileScreen extends Component {
  handleBack = () => {
    history.goBack()
  }

  render() {
    return (
      <View>
        <Button onClick={this.handleBack} type="primary" icon="arrow-left">
          Back
        </Button>
        <Text>Profile</Text>
      </View>
    )
  }
}
