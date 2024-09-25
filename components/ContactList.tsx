import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Harsh Gaur',
            status: 'Software Engineer',
            imageUrl: 'https://i.pravatar.cc/150?img=57',
        },
        {
            uid: 2,
            name: 'Shubham Tyagi',
            status: 'Software Engineer',
            imageUrl: 'https://i.pravatar.cc/150?img=13',
        },
        {
            uid: 3,
            name: 'Gaurav Jeena',
            status: 'Software Engineer',
            imageUrl: 'https://i.pravatar.cc/400?img=55',
        },
        {
            uid: 4,
            name: 'Divyanshu Verma',
            status: 'Software Engineer',
            imageUrl: 'https://i.pravatar.cc/400?img=56',
        },

        
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled= {false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source = {{
                    uri: imageUrl,
                }} style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{name}</Text> 
                <Text style={styles.userStatus}>{status}</Text>
                </View> 
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        margin: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
        backgroundColor: '#AE1438',
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 /2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    userStatus: {
        fontSize: 12,
        color: '#FFFFFF'

    },

})