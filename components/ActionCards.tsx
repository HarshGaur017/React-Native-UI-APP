import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's New in JavaScript 21 - ES12
        </Text>
        </View>
        <Image source={{uri: 'https://www.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg'}} 
        style={styles.imageCard } />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.paragraph}>JavaScript is a programming language that adds interactivity to web pages. It's used to create dynamic web pages that update automatically, without requiring the user to refresh the page. JavaScript is a key part of web development, along with HTML and CSS.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.geeksforgeeks.org/introduction-to-javascript/')} 
            >
                <Text style={styles.links}>Read More</Text>
            </TouchableOpacity>
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
      height: 340,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    elevatedCard: {
      backgroundColor: '#3498DB',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,
    },
    headingContainer: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',

    },
    imageCard: {
        height: 100
    },
    bodyContainer: {
      padding: 10,
    },
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    links: {
      fontSize: 16,
      color: '#FFFFFF',
      backgroundColor: '#2475B0',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 8
    },
    paragraph: {
      color: '#FFFFFF',
    },


})