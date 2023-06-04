import { TextInput, View, StyleSheet } from 'react-native'
import React from 'react'

const InputText = () => {
    const [text, onChangeText] = React.useState('')
    const [number, onChangeNumber] = React.useState('')

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Pesquise o pokémon pelo nome...'
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder='...ou pelo número.'
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff'
    }
})

export default InputText