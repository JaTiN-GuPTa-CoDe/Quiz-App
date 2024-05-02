import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import MyStack from './navigation'
import Result from './screens/result'

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <Result />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 16,
  }
})