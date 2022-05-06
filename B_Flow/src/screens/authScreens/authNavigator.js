import React, { useEffect } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../authScreens/Splash/Splash';
import Login from '../authScreens/Login';
import Signup from "./Signup";
import Home from "../appScreens/Home";
import TimeSummary from "../TimeSummary";


const AuthStack = createNativeStackNavigator()

const SplashNavigator = () => {
    return (
        <AuthStack.Navigator
        screenOptions = {{
            headerShown: false
        }}>
            <AuthStack.Screen name ="Splash" component={Splash}/>
            <AuthStack.Screen name ="Login" component={Login}/>
            <AuthStack.Screen name ="Signup" component={Signup}/>
            <AuthStack.Screen name ="Home" component={Home}/>
            <AuthStack.Screen name ="TimeSummary" component={TimeSummary}/>




            
        </AuthStack.Navigator>
    )
}

const AuthNavigator = () => {  

         return <SplashNavigator />
     
    
    
}

export default AuthNavigator