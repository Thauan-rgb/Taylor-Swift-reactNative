import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,
       } from 'react-native';

import { useState } from 'react';

const API_PUBLICA = 'https://taylor-swift-api.vercel.app/api/songs/random';

export default function App() {

  const [musica, setMusica] = useState(null);

  async function sortearMusica() {

    try {

      const response = await fetch(API_PUBLICA);
      const data = await response.json();

      setMusica(data);

    } catch (error) {

      console.log('deu erro');

    }

  }

  function corAlbum(album) {

    switch (album) {

      case 'Taylor Swift':
        return '#3A9D82';

      case 'Fearless':
        return '#FFD54F';

      case 'Speak Now':
        return '#7E57C2';

      case 'Red':
        return '#C62828';

      case '1989':
        return '#64B5F6';

      case 'Reputation':
        return '#424242';

      case 'Lover':
        return '#FF80AB';

      case 'Folklore':
        return '#adb5bd';

      case 'evermore':
        return '#8D6E63';

      case 'Midnights':
        return '#0041c2';
      
      case 'The Tortured Poets Department':
        return '#C5C0B7';

      case 'The life of a showgirl':
        return '#7FFFD4';

      default:
        return '#000';
    }
  }

  return (

    <View style={styles.container}>

      <Image
        source={require('./assets/b2.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        Descubra músicas aleatórias da Taylor Swift
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={sortearMusica}
      >
        <Text style={styles.botaoTexto}>
          Sortear música
        </Text>
      </TouchableOpacity>

      <View style={styles.box}>

        {!musica ? (

          <Text style={styles.boxTexto}>
            Nenhuma música sorteada
          </Text>

        ) : (

          <ScrollView>

            <Text
              style={[
                styles.nome,
                { color: corAlbum(musica.album) }
              ]}
            >
              {musica.name}
            </Text>

            <Text
              style={[
                styles.album,
                { color: corAlbum(musica.album) }
              ]}
            >
              Álbum: {musica.album}
            </Text>

            <Text
              style={[
                styles.letra,
                { color: corAlbum(musica.album) }
              ]}
            >
              {musica.lyrics}
            </Text>

          </ScrollView>

        )}

      </View>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#9f9784',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  imagem: {
    width: 160,
    height: 240,
    borderRadius: 100,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  texto: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#b5b6a8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 15,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  box: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFAF0',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    marginBottom: 50,
  },

  boxTexto: {
    color: '#0',
    textAlign: 'center',
    fontSize: 16,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  album: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },

  letra: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },

});


