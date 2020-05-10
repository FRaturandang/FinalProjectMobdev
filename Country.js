import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

class Country extends Component {
  constructor() {
    super()
    this.state = {
      country: [],
      pilihan: 'Indonesia',
      url: 'https://covid19.mathdro.id/api/countries',
      positif: '0',
      sembuh: '0',
      meninggal: '0'
    }
  }

  async componentDidMount(){
    fetch(this.state.url)
      .then(resp => resp.json())
      .then(json1 => this.setState({country: json1.countries}))
    this.getCaseCountry(this.state.pilihan);  
  }

  updateSearch = (event) => {
    this.setState({pilihan: event})
    this.getCaseCountry(event)
  }



  getCaseCountry = async (negara) => {
    const getdata = 
    fetch(`https://covid19.mathdro.id/api/countries/${negara}`)
      .then(response => response.json())
      .then(json => this.setState({
          positif: json.confirmed.value,
          sembuh: json.recovered.value,
          meninggal: json.deaths.value
        })
      )
  }
  render() {
    return (
      <View style={{ flex: 1, flexWrap: 'nowrap' }}>
        {/* <View style={{ flex: 1 }}> */}
        <SearchableDropdown
          onTextChange={text => this.setState({pilihan: text})}
          onItemSelect={item => this.updateSearch(item.name)}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: '#222',
          }}
          items={this.state.country}
          //default selected item index
          placeholder="Cari Negara"
          //place holder for the search input
          resetValue={false}
        />
        {/* </View> */}
        <View style={{flex: 1}}>
          <Text style={{fontSize: 40}}>Negara: {this.state.pilihan}</Text>
        </View>
        <View style={{flex: 6}}>
          <View style={style.container}>
            <View style={style.box1}>
              <Text style={{ fontSize: 30 }}>Terkonfirmasi</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{this.state.positif}</Text>
            </View>
            <View style={style.box2}>
              <Text style={{ fontSize: 30 }}>Sembuh</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{this.state.sembuh}</Text>
            </View>
            <View style={style.box3}>
              <Text style={{ fontSize: 30 }}>Meninggal</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{this.state.meninggal}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start'
  },
  box1: {
      height: 170,
      borderRadius: 10,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
  },
  box2: {
      height: 170,
      borderRadius: 10,
      backgroundColor: 'springgreen',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingHorizontal: 5
  },
  box3: {
      height: 170,
      paddingHorizontal: 5,
      borderRadius: 10,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
  }
})

export default Country;