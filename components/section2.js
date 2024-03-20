import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 0 }}>
                <Image
                    style={{ width: 200, height: 400, borderRadius: 1, resizeMode: "contain",marginTop:-70 }}
                    source={require("C:/Users/DELL/CinemaApp/assets/pics/holms.jpg")}
                />
            </View>

            {/* View ก้อนที่ 3 */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Overseas Adventure Travel In Nepal</Text>
                <Text style={{ color: '#444444' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
            </View>
        </View>
    );
}