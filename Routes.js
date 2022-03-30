import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from './Home'
import Signup from './Signup'
import Signin from './Signin'
import Showstudents from './Showstudents'
import AddStudent from './AddStudent'
import ViewPresent from './ViewPresent'
import CameraExample from './Camera'
import ImagePickerExample from './ImagePicker'
import Preview from './Preview'
import ViewStudents from './ViewStudents'
import SignOut from './SignOut'


const Authnavigator = createStackNavigator({
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },
    Signin: {
        screen: Signin,
        navigationOptions: {
            header: null
        }
    }
        
},
    { initialRouteName: 'Signin' }
);


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Dashboard',
            headerRight: (<SignOut/>),
           
              
              headerTitleStyle: {
                fontWeight: 'bold',
           
              },
          }
    },
    Showstudents:{
        screen : Showstudents,
        navigationOptions: {
            title: 'Students'
        }
    },
    AddStudent:{
        screen : AddStudent,
        navigationOptions: {
            title: 'Add'
        }
    },
    ViewPresent:{
        screen : ViewPresent,
        navigationOptions: {
            title: 'Present Today'
        }
    }
    ,
    CameraExample:{
        screen : CameraExample,
        navigationOptions: {
            header: null
        }
    }
    ,
    ImagePickerExample:{
        screen : ImagePickerExample,
        navigationOptions: {
            header: null
        }
    }
    ,
    Preview:{
        screen : Preview,
        navigationOptions: {
            header: null
        }
    }
    ,
    ViewStudents:{
        screen : ViewStudents,
        navigationOptions: {
            title: 'Students'
        }
    }

},
    { initialRouteName: 'Home' }
);



export default createAppContainer(createSwitchNavigator(
    {
        Auth: Authnavigator,
        App: AppNavigator,
    },
    {
        initialRouteName: 'Auth',
    }
));