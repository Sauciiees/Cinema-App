import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Section1() {
    return (
        <ScrollView style={{ padding: 20, flexDirection: "column" }}>

            
            <Image style={{ width: 40, height: 40, backgroundColor: 'black' }} source={{uri:'https://dl.memuplay.com/new_market/img/com.hlpth.majorcineplex.icon.2023-10-12-10-37-10.png'}} />

            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'gray' }}>
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 14 / 6 }} source={require("C:/Users/DELL/CinemaApp/assets/pics/dune.png")} />
            </View>
            
            

        </ScrollView>
    );
}
