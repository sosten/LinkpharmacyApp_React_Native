import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Prescription({navigation}) {
    return (
        <View style={styles.prec_container}>
            <Text style={styles.h_1}>Uploade Prescription</Text>
            <Text style={styles.h_2}>Uploade Prescription and tell us what you need. We do the rest</Text>
            <Text style={styles.h_3} onPress={()=>navigation.navigate('Uploade Prescription')}>Uploade Now <AntDesign name="arrowright" size={24} color="black" /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    prec_container: {
        backgroundColor: "#f2f2f0",
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },

    h_1: {
        fontSize: 25,
        color: "#222",
        paddingBottom: 10,
        paddingTop: 10
    },

    h_2: {
        fontSize: 16,
        color: "#222",
        width: 200
    },

    h_3: {
        fontSize: 24,
        color: "#222",
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: "700"
    },
})
