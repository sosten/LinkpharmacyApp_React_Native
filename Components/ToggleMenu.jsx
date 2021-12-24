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
                <Text style={styles.img}>
                    {/* <Image source={require('../assets/images/logo.png')} style={{ width:250, height: 100, paddingBottom: 200}} resizeMode={'container'} /> */}
                    Linkpharmacy
                </Text>
                <Text>
                    <FontAwesome5 name="bell" size={24} color="#fff" />
                </Text>
                <Text>
                    <Ionicons name="md-cart-outline" size={24} color="#fff" />
                </Text>
                
            </View>
            <View style={styles.text}>
                <Feather name="search" size={24} color="#fff" />
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
        // flexDirection: "row",
        width: "100%",
        // height: 100,
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
        // backgroundColor:"#5555",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // height: 50,
        // marginTop: -10,
        fontSize: 25
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