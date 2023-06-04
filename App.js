import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import InputText from './components/InputText'
import InputSubmit from './components/InputSubmit'
import LoadImage from './components/LoadImage'

export default function App() {
  return (
    <View style={styles.container}>
      <LoadImage/>
      <Text>Finder</Text>
      <InputText />
      <InputSubmit />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb05',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
