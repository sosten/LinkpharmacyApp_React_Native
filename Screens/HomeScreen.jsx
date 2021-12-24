import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ToggleMenu from '../Components/ToggleMenu';
import CarouselBanner from '../Components/CarouselBanner';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
            <ToggleMenu />
            <CarouselBanner />
            <View style={styles.prec_container}>
                <Text style={styles.h_1}>Uploade Prescription</Text>
                <Text style={styles.h_2}>Uploade Prescription and tell us what you need. We do the rest</Text>
                <Text style={styles.h_3} onPress={()=>navigation.navigate('Uploade Prescription')}>Uploade Now <AntDesign name="arrowright" size={24} color="black" /></Text>
            </View>
           <View style={styles.refill_container}>
               <View style={styles.refill_cont}>
                    <View style={styles.refill_icon}>
                        <FontAwesome5 name="pills" size={40} color="#777" />
                    </View>
                    <Text style={{textAlign: "center"}}>Request Medicine</Text>
               </View>
               <View style={styles.refill_cont}>
                    <View style={styles.refill_icon}>
                        <MaterialCommunityIcons name="calendar-clock" size={40} color="#777" />
                    </View>
                    <Text style={{textAlign: "center"}}>Schedule Refill</Text>
               </View>
               <View style={styles.refill_cont}>
                   <View style={styles.refill_icon}>
                        <FontAwesome5 name="question" size={40} color="#777" />
                    </View>
                    <Text style={{textAlign: "center"}}>Ask Question</Text>
               </View>
               <View style={styles.refill_cont}>
                    <View style={styles.refill_icon}>
                        <MaterialIcons name="access-alarm" size={40} color="#777" />
                    </View>
                    <Text style={{textAlign: "center"}}>Manage Reminder</Text>
               </View>
           </View>
            <View style={styles.consult}>
                <View style={[styles.consult_cont,styles.consult_bg_1]}>
                    <Text style={{color: "#fff", fontSize: 17}}>Consultation</Text>
                    <MaterialIcons name="headset-mic" size={54} color="black" />
                </View>
                <View style={[styles.consult_cont,styles.consult_bg_2 ]}>
                    <Text style={{color: "#fff", fontSize: 17}}>Whatsapp</Text>
                    <FontAwesome5 name="whatsapp" size={54} color="black" />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },

    prec_container: {
        backgroundColor: "#fff",
        elevation: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },

    h_1: {
        fontSize: 25,
        color: "#333",
        paddingBottom: 10,
        paddingTop: 10
    },

    h_2: {
        fontSize: 16,
        color: "#222",
        width: 200
    },

    h_3: {
        fontSize: 22,
        color: "#333",
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: "700"
    },

    refill_container: {
        backgroundColor: "#fff",
        elevation: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",       
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },

    refill_cont: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        width: 80,
        paddingTop: 10,
        paddingBottom: 10,
    },

    refill_icon: {
        backgroundColor: "#fff",
        elevation: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        height: 60,
        width: 60,
    },

    consult: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        margin: 10,
        elevation: 1,
    },

    consult_cont: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
        padding: 10,
        borderRadius: 5,
    },

    consult_bg_1: {
        backgroundColor: "orange",
    },

    consult_bg_2: {
        backgroundColor: "#c4d600",
    }
})