import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class IndoCases extends Component  {
    constructor(){
        super();
        this.state ={
            Indonesia: [],
            refreshing: false
        }
    }
  
    onRefresh = () => {
        this.getData()
    }  
  
    componentDidMount = () => {
        this.getData()
    }
    
    getData = async () =>{
      this.setState({refreshing: true})
      const response = await fetch('https://Indonesia-covid-19.mathdro.id/api/provinsi')
      const json = await response.json()
      this.setState({Indonesia: json.data, refreshing: false})
    }
    
    renderData = (item) => {
      <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
        <Text>name: {item.item.name}</Text>
      </View>
    }
    
    render() {
        const [[dataProvinsi]] = this.setState 
    return (
      <View>
        <FlatList 
            data={this.state.Indonesia.data}
            keyExtractor={item => item.fid.toString()}
            renderItem={this.renderData
                // <View style={{padding: 20, borderBottomWidth: 2, borderBottomColor: '#000'}}>
                //     <Text>{item.provinsi}</Text>
                // </View>
            }
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
        />
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


export default IndoCases