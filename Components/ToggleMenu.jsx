import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const ToggleMenu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text>
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                        <Entypo name='menu' size={30} color="#fff" />
                    </TouchableOpacity>
                </Text>
                <Image source={require('../assets/images/logo.png')} style={styles.img} />
                <Text>
                    <FontAwesome5 name="bell" size={24} color="#fff" />
                </Text>
                <Text>
                    <Ionicons name="md-cart-outline" size={24} color="#fff" />
                </Text>
                
            </View>
            <View style={styles.text}>
                <Feather name="search" size={24} color="#777" />
                <TextInput
                    placeholder='Search for prescription medicines and OTC products'
                 />
            </View>
        </View>
    )
}

export default ToggleMenu;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#c4d600",
        width: "100%",
        elevation: 1,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 25,
        paddingTop: 10,
        paddingBottom: 20,
    },

    container: {
        backgroundColor: "#c4d600",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        
    },

    img: {
        width: "75%",
        height: "80%",
    },

    text: {
        backgroundColor:"#fff",
        flexDirection: "row",
        width: "100%",
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        padding: 10,
        marginTop: 20,
    }
})