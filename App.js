import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './components/auth/landing';
import { createStackNavigator }  from '@react-navigation/stack'; 
import * as firebase from 'firebase'
import RegisterScreen from './components/auth/Register';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './Redux/reducers'
import thunk from 'redux-thunk'
import MainScreen from './components/Main'
import LoginScreen from './components/auth/Login'


const store = createStore(rootReducer,applyMiddleware(thunk))

const firebaseConfig = {
  // enter google firebase credentials
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      loaded : false
    }
  }

  render() {
    return(
      <Provider store={ store }>
         <NavigationContainer>
             <Stack.Navigator>
               <Stack.Screen name="Landing" component={MainScreen} options={{headerShown:false}}/>
             </Stack.Navigator>
         </NavigationContainer>
      </Provider>     
    )  
  }
}

export default App



// componentDidUpdate() {
//      firebase.auth().onAuthStateChanged((user)=>{
//      if(user){
//        this.setState({
//           loggedIn: true,
//           loaded: true
//        })
//       }
//         this.setState({
//           loggedIn: false,
//           loaded: false
//         })
//     }) 
//   }