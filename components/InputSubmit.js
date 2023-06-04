import { Button, StyleSheet, View, Alert } from 'react-native'
import React from 'react'

const InputSubmit = () => {
  return (
    <View style={styles.view}>
        <Button style={styles.button}
            title="Procurar"
            color="#3c5aa6"
            onPress={() => Alert.alert('Apertou!')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    button: {
        height: 40,
        margin: 12,
        padding: 10,
    },
})

export default InputSubmit