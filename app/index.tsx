import { colors } from '@/constants/theme'
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.neutral500} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
});