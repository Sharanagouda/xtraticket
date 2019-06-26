import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import styles from "./styles";

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
