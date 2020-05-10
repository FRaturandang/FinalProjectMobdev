import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Globaldata from './Global'
import CovidIndo from './CovidIndo';
import Country from './Country'

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) =>{
  const onPress = () => navigation.navigate('CountryCases')
  return (
    <View style={{flex: 1, marginBottom: 10}}>
      <View style={{flex: 2, paddingVertical: 10}}>
        <Text style={style.fontSubJudul}>Global</Text>
        <Globaldata />
      </View>

      <View style={{ flex:0.5, paddingHorizontal: 10}}>
        <Text 
          onPress= {onPress}
          style={{fontSize: 15, textDecorationLine: 'underline'}}
        >
          Lihat data sebaran di dunia >
        </Text>
      </View>

      <View style={{flex: 7}}>
        <Text style={style.fontSubJudul}>Indonesia</Text>
        <View style={{flex: 1}}><CovidIndo /></View>
      </View>

      <View style={{flex: 0.5, paddingHorizontal: 10}}>
        <Text>Untuk detail data sebaran di Indonesia</Text>
        <View style={{flexDirection: 'row', fontSize: 10}}>
          <Text>Kunjungi website resmi pemerintah: </Text>
          <Text 
            style={{textDecorationLine: 'underline'}}
            onPress={()=> Linking.openURL("https://covid19.go.id")}
          >covid19.go.id
          </Text>
        </View>
      </View>
      {/* <IndoCases /> */}
    </View>
  )
}

const CountryScreen = () => {
  return (
    <View style = {{flex: 1}}>
      <Country />
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal"
          }}
        >
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
          <Stack.Screen
            name="CountryCases" 
            component={CountryScreen}
            options={{ title: 'Country Cases' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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

export default App