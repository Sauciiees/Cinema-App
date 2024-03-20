
import React from 'react';
import { ScrollView,  View } from 'react-native';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Movieslist from '../components/movieslist';


export default function Homepage() {
    return (
        <ScrollView style={{backgroundColor:'black'}}>
            <View style={{ flex: 1, paddingTop: 20 }}>
             <Section1/>
             {/* <Section2/> */}
             <Movieslist style={{margin:20}}/>

            </View>
        </ScrollView>

    );
}