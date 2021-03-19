import React from 'react'
import { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)

    const id = navigation.getParam('id')

    const blogPost = state.find(
        blogPost => blogPost.id === id
    )

    return (
        <View>
            <Text>
                { blogPost.title }
            </Text>
            <Text>
                { blogPost.content }
            </Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    console.log(navigation.getParam('id'))
    return {
        headerRight: () => <TouchableOpacity onPress={()=> {navigation.navigate('Edit', { id: navigation.getParam('id')})}}>
            <EvilIcons name="pencil" size={30} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({})

export default ShowScreen