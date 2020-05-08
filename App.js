import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Globaldata from './Global'
import IndoCases from './Indo';
import CovidIndo from './CovidIndo';

class App extends Component  {
  constructor(){
    super();
    this.state ={
      Indonesia: [],
      refreshing: false,
      positif: null,
      sembuh: null,
      meninggal: null
    }
  }  
  
  componentDidMount = () => {
    fetch('https://covid-19.mathdro.id/api')
    .then(resp => resp.json())
    .then(globe => this.setState({
      positif: globe.confirmed.value,
      sembuh: globe.recovered.value,
      meninggal: globe.deaths.value})
    )
    .catch(() => alert('Check your internet connection'))
  }
    
  render() {
    const {...rest} = this.state
    return (
      <View style={{flex: 1}}>
        <Text style={style.fontJudulBesar}>Data COVID-19 Global & Indonesia</Text>
        <View style={{flex: 1.8, paddingVertical: 20}}>
          <Text style={style.fontSubJudul}>Global</Text>
          <Globaldata data = { {...rest} } />
        </View>
        <View style={{flex: 8}}>
          <Text style={style.fontSubJudul}>Indonesia</Text>
          <View style={{flex: 1}}><CovidIndo /></View>
        </View>
        {/* <IndoCases /> */}
      </View>
    )
  }
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