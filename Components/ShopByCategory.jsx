import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import shop_by_category_list from '../Constants/ShopByCategoryList';

const ShopByCategory = () => {
    return (
        <View style={styles.container}>
            <View style={styles.shop_flex}>
                <View>
                    <Text style={{color: "#777",}}>EXPLORE</Text>
                    <Text style={{color: "#333", fontSize: 17, fontWeight: "700"}}>Shop By Category</Text>
                </View>
                <View>
                    <Text style={{color: "green", fontSize: 17, fontWeight: "700"}}>SEE ALL <Entypo name="chevron-thin-right" size={18} color="green" /></Text>
                </View>
            </View>

            <FlatList
             data={shop_by_category_list}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             renderItem={
                ({item})=><View key={item.id}>
                    <View style={styles.card_flex}>
                        <View style={styles.card}>
                            <Image source={item.img} style={styles.img}/>
                            <Text style={{textAlign: "center"}}>{item.category}</Text>
                        </View>
                    </View>
                </View>
            }
            />    
        </View>
    )
}

export default ShopByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        elevation: 1
    },

    shop_flex: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        padding: 10,
    },

    card_flex: {
        flexDirection: "row",
    },

    card: {
        backgroundColor: "#eeee",
        padding: 10,
        height: 120,
        width: 110,
        borderRadius: 10,
        alignItems: "center",
        marginRight: 7,
    },

    img: {
        width: "100%",
        height: "60%",
        resizeMode: "cover",
    }
})
