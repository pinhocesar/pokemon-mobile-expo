import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const LoadImage = () => {
  return (
    <View>
      <Image style={styles.logo}
        source={{
          uri: 'https://logospng.org/download/pokemon/pokemon-2048.png',
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  }
})

export default LoadImage