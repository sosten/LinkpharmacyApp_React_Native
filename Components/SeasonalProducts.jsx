import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import seasonal_products from '../Constants/SeasonalProducts';

const SeasonalProducts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.seasonal_flex}>
                <View>
                    <Text style={{color: "#777",}}>EXPLORE</Text> 
                    <Text style={styles.seasonal_cont}>Seasonal Products</Text>
                </View>
                <View>
                    <Text style={{color: "green", fontSize: 17, fontWeight: "700"}}>SEE ALL <Entypo name="chevron-thin-right" size={18} color="green" /></Text>
                </View>
            </View>
            <FlatList 
                data={seasonal_products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                renderItem={
                    ({item})=><View key={item.id}>
                        <View style={styles.card}>
                            <Image source={item.img} style={styles.img}/>
                            <View>
                                <Text style={styles.h_1} numberOfLines={2} ellipsizeMode="tail">{item.p_name}</Text>
                                <Text style={styles.h_2} numberOfLines={2} ellipsizeMode="tail">{item.p_type}</Text>
                                <Text style={styles.h_3}>{item.discount}</Text>
                                <Text style={styles.h_4}>{item.price}</Text>
                            </View>
                        </View>
                    </View>

                }
                
            />
        </View>
    )
}

export default SeasonalProducts

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        elevation: 4
    },

    seasonal_flex: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },

    seasonal_cont: {
        backgroundColor: "#c4d600",
        padding: 10,
        marginTop: 10,
        borderRadius: 20,
        fontSize: 17,
        color: "#fff",
        fontWeight: "700",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        marginRight: 10,
        height: 270,
        width: 170,
        borderWidth: 1,
        borderColor: "#5555",
    },

    img: {
        width: "100%",
        height: "38%",
        resizeMode: "contain",
        marginBottom: 10,
    },

    h_1: {
        fontSize: 16,
        color: "#000",
    },

    h_2: {
        backgroundColor: "#1111",
        color: "#333",
        fontSize: 16,
        borderRadius: 30,
        padding: 10,
    },

    h_3: {
        color: "green",
        fontSize: 15,
    },

    h_4: {
        color: "green",
        fontSize: 16,
    }
})
