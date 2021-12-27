import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-x2-carousel';

const DATA = [
  { text: '#1' },
  { text: '#2' },
  { text: '#3' },
];

export default function CarouselBanner() {
  const renderItem = data => (
    <View key={data.text} style={styles.item}>
      <Text>{data.text}</Text>
    </View>
  );
      return (
        <View style={styles.container}>
         <Carousel
            pagination={Pagination}
            renderItem={renderItem}
            data={DATA}
            autoplay={true}
            autoplayInterval={2000}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    item: {
      width: 390,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dbf3fa',
      marginTop: 10,
      borderRadius: 10,
    },

  });
