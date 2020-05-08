import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Globaldata = ( {data} ) => {
    return (
        <View style={style.container}>
            <View style={style.box1}>
                <Text style={{fontSize: 20}}>Positif</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{data.positif}</Text>
            </View>
            <View style={style.box2}>
                <Text style={{fontSize: 20}}>Sembuh</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{data.sembuh}</Text>
            </View>
            <View style={style.box3}>
                <Text style={{fontSize: 20}}>Meninggal</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{data.meninggal}</Text>
            </View>
        </View>
    )
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
        flexDirection: 'column'
    },
    box3: {
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
})

export default Globaldata