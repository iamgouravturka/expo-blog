import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={setTitle} />
            <Text style={styles.label} >Enter Content:</Text>
            <TextInput value={content} style={styles.input} onChangeText={setContent} />
            <Button 
                title="Add Blog Post" 
                onPress={() => {
                        addBlogPost(title, content, () => {
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

export default CreateScreen