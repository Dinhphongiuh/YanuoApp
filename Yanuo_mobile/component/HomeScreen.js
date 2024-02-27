import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import HeaderView from './Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: 30, height: 30}}
        >
          <Image
            style={{width: 30, height: 30}}
            resizeMode='contain'
            source={require('./Icon/searchIcon.png')}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '60%', alignItems: 'flex-start',}}>
          <Text style={{color: '#fff', fontSize: 14}}>Tìm kiếm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Image
            resizeMode='contain'
            style={{width: 30, height: 30}}
            source={require('./Icon/qr-code.png')}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Image
            resizeMode='contain'
            style={{width: 30, height: 30}}
            source={require('./Icon/add.png')}
          ></Image>
        </TouchableOpacity>
      </View> */}
      <HeaderView></HeaderView>
      <View style={{width: '100%', flex: 1, backgroundColor: '#fff'}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#009ef9',
  }
});
