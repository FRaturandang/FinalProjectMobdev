import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Globaldata extends Component  {
    constructor(){
      super();
      this.state ={
        positif: null,
        sembuh: null,
        meninggal: null
      }
    }  
    
     async componentDidMount(){
      fetch('https://covid-19.mathdro.id/api')
      .then(resp => resp.json())
      .then(globe => this.setState({
        positif: globe.confirmed.value,
        sembuh: globe.recovered.value,
        meninggal: globe.deaths.value})
      )
      .catch(error => alert(error))
    }
      
    render() {
      return (
        <View style={style.container}>
            <View style={style.box1}>
                <Text style={{fontSize: 18}}>Terkonfirmasi</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{this.state.positif}</Text>
            </View>
            <View style={style.box2}>
                <Text style={{fontSize: 20}}>Sembuh</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{this.state.sembuh}</Text>
            </View>
            <View style={style.box3}>
                <Text style={{fontSize: 20}}>Meninggal</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{this.state.meninggal}</Text>
            </View>
        </View>
      )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    box1: {
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    box2: {
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: 'springgreen',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 5
    },
    box3: {
        height: 100,
        width: 120,
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
})

export default Globaldata