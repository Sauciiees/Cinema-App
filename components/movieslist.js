import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

import { Dimensions } from "react-native";
import { useState } from "react";

export default function Movieslist(props) {
    
    
    const [onlineMovieslist, setOnlineMovieslist] = useState([]);



    const loadOnlineMovieslist = async () => {
        try {
            let promise = await fetch('https://gist.githubusercontent.com/Urdzik/de477f8e3d7baf4366c9d797cfe63531/raw/38c6afa2937ef222323392cc34c8c8c77e02fc40/Movie.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineMovieslist(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useLayoutEffect(() => {
        loadOnlineMovieslist();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20, color:'white'}}>Online Streaming</Text>
            <Text style={{ color: "grey" }}>free-to-watch</Text>
            <FlatList
                horizontal={true}
                data={onlineMovieslist}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 20,marginTop:6 }}>
                                <Image style={{ width: Dimensions.get("screen").width / 2, height: 250, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.Poster }} />
                                <View style={{ width:Dimensions.get("screen").width / 2,flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 0.25, borderColor: 'white' }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ fontSize: 15, color: 'yellow', textAlign: "left" }}>IMDB{item.imdbRating}/10</Text>
                                        <Text style={{ fontSize: 13, color: 'gray', textAlign: "center" }}>{item.Runtime}</Text>
                                    </View>
                                    <View style={{marginTop:10, flex: 1}}>
                                        <Text style={{fontSize:15,color:'white'}}>{item.Title}</Text>
                                        <Text style={{color:'gray'}}>{item.Released}</Text>
                                        <Text style={{color:'gray'}}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>

                        );
                    }
                }
                keyExtractor={item => item.id}
            />


        </View>
    );
}