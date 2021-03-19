import JsonServer from '../api/JsonServer'
import createDataContext from './CreateDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts': return action.payload 
        case 'add_blogpost': 
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'edit_blogpost': 
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await JsonServer.get('/blogposts')
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await JsonServer.post('/blogposts', {title, content})
        
        if(callback)
            callback()
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await JsonServer.put(`/blogposts/${id}`, { title, content })

        dispatch({ type: 'edit_blogpost', payload: {id, title, content}})
        callback();
    }
}

const deleteBlogPost = dispatch => {
    return async id => {
        await JsonServer.delete(`/blogposts/${id}`)

        dispatch({ type: 'delete_blogpost', payload: id})
    }
}

export const { Context, Provider } = createDataContext( blogReducer, { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts }, [])