import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({navigation}) => {
    const { state } = useContext(Context)
    const { editBlogPost } = useContext(Context)

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    )

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return (
        <View>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={setTitle} />
            <Text style={styles.label} >Enter Content:</Text>
            <TextInput value={content} style={styles.input} onChangeText={setContent} />
            <Button 
                title="Edit Blog Post" 
                onPress={() => {
                        editBlogPost(blogPost.id, title, content, () => {
                            navigation.pop()
                        })
                        
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default EditScreen