import React from 'react'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,

},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog Post'
  }
})

const App = createAppContainer(navigator)

export default () => {
  // return <App />
  return <Provider>
    <App />
  </Provider>
}
