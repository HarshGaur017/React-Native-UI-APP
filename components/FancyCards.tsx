import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjX9ZJ6ngCW0vKfcHP93GzO7NCr-2_tscfA&s'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>United Kingdom</Text>
            <Text style={styles.cardLabel}>Birmingham</Text>
            <Text style={styles.cardDescription}>Birmingham is a city and metropolitan borough in 
              the metropolitan county of West Midlands in England. It is the second-largest city in 
              Britain commonly referred to as the second city of the United Kingdom with a population 
              of 1.145 million in the city proper.</Text>
              <Text style={styles.cardFooter}>20 Mins Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,

    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1, 
      }
    },
    cardImage: {
        height: 180,
        marginBottom: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,
    },
    cardTitle: {
      color: '#000000',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 4

    },
    cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6,
    },
    cardDescription: {
      color: '#000000',
      fontSize: 12,
      marginBottom: 12,
    },
    cardFooter: {
      color: '#000000',
    },


})