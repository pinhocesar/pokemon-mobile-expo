import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import React from 'react'

//const PokeCard = (idPokemon) => {
const PokeCard = () => {
    const [pokemonSetado, setaPokemon] = React.useState(0);

    //const endpoint = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonSetado}/`

    fetch(endpoint)
        .then(res => res.json())
        .then(json => {
            const pokemon = {
                nome: json.name,
                numero: json.id,
                tpPrimario: json.types[0].type.name,
                tpSecundario: json.types[1].type.name,
                imagem: json.sprites.other["official-artwork"].front_default
            }

            setaPokemon(pokemon)
        })
        .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });

    return (
        (pokemonSetado != 0) ? (
            <View style={styles.card}>
                <Image style={styles.imagem} resizeMode="stretch" source={{ uri: pokemonSetado.imagem }} />
                <Text style={styles.titulo}>#{pokemonSetado.numero} - {pokemonSetado.nome}</Text>
                <Text style={styles.tipos}>Tipos: {pokemonSetado.tpPrimario}, {pokemonSetado.tpSecundario}</Text>
            </View>
        ) : (
            <View>
                <Text style={styles.tituloAlt}>Pesquise em um do campos acima e aperte em procurar</Text>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 20,
    },

    imagem: {
        width: 100,
        height: 100,
        margin: 20,
    },

    tituloAlt: {
        fontSize: 20,
        margin: 30,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
    },

    tipos: {
        fontSize: 14,
    }
})

export default PokeCard