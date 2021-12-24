import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchProduct = () => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})