import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Globaldata from './Global'
import CovidIndo from './CovidIndo';

const HomeScreen = () =>{
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.8}}>
        <Text style={style.fontSubJudul}>Global</Text>
        <Globaldata />
      </View>
      <View style={{flex: 8}}>
        <Text style={style.fontSubJudul}>Indonesia</Text>
        <CovidIndo />
      </View>
      {/* <IndoCases /> */}
    </View>
  )
}

const style = StyleSheet.create({
  fontJudulBesar: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop:30
  },
  fontSubJudul: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  }
})

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Covid-19 Global & Indonesia',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 30
                },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default App