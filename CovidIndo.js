import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';


class CovidIndo extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.box1}>{item.provinsi}</Text>
      <View style={styles.box2}><Text>{item.kasusPosi}</Text></View>
      <View style={styles.box3}><Text>{item.kasusSemb}</Text></View>
      <View style={styles.box4}><Text>{item.kasusMeni}</Text></View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataApi();
}

componentDidMount = () =>{
    this.getDataApi();
}

getDataApi = async () => {
  this.setState({refreshing: true})
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  this.setState({DataIndo: DataIndo.data, refreshing: false})
}

render(){
    const data1 = this.state.DataIndo.map(item => item)
    return (
        <View>
          <View style={styles.covidContainer}>
            <FlatList 
                data={data1}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default CovidIndo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    borderRadius: 15,
    backgroundColor: 'snow'
  },
  covidContainer:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:15
  },
  box1:{
    flex: 1,
    marginBottom: 7,
    height: 20
  },
  box2:{
    flex: 0.5,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor:'yellow',
    alignItems: 'center'
    
  },
  box3:{
    flex: 0.5,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor:'lime',
    alignItems: 'center'
  },
  box4:{
    flex:0.5,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor:'red',
    alignItems: 'center'
  }
})