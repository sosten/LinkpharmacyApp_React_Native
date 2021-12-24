import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UploadePrescription = () => {
    return (
        <View style={styles.container}>
            <Text>Prescription Screen</Text>
        </View>
    )
}

export default UploadePrescription

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})