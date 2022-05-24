import React, { useEffect } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../authScreens/Splash/Splash';
import Login from '../authScreens/Login';
import Signup from "./Signup";
import {useSelector} from 'react-redux'



const AuthStack = createNativeStackNavigator()

const SplashNavigator = () => {

    const chkSplash = useSelector((state) => state.auth.splash)

    return (
        <AuthStack.Navigator
        initialRouteName= {chkSplash ? "Login" : "Splash"}
        screenOptions = {{
            headerShown: false,

        }}>
            <AuthStack.Screen name ="Splash" component={Splash}/>
            <AuthStack.Screen name ="Login" component={Login}/>
            <AuthStack.Screen name ="Signup" component={Signup}/>
           

            
        </AuthStack.Navigator>
    )
}

const AuthNavigator = () => {  

         return <SplashNavigator />
     
    
    
}

export default AuthNavigator