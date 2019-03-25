/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {

    const fotos = [
      {id: 1, usuario: 'ramon'},
      {id: 2, usuario: 'felipe'},
      {id: 3, usuario: 'dienisson'}
    ];

    return (
      <FlatList style={{marginTop: 20}}
          keyExtractor={item => String(item.id)}
          data={fotos}
          renderItem={ ({item}) =>
              <View>
                  <Text>{item.usuario}</Text>
                  <Image source={require('./resources/img/react-native.png')}
                      style={{width: width, height: width}} />        
              </View>
          }
      />
  );
  }
}