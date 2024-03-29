import React, { useEffect, useState } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import AuthNavigator from '../screens/authScreens/authNavigator';
import DefaultStyles from "../config/Styles";
import { useSelector } from 'react-redux';
import Home from "./appScreens/Home";
import TimeSummary from "./appScreens/TimeSummary";
import TimeManagement from "./appScreens/Management/TimeManagement";
import Events from "./appScreens/Events";
import EventDetail from "./appScreens/Events/EventDetail";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from  "./Drawer/DrawerContent";
import EventSelection from "./appScreens/Events/EventSelection";



// const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerStyle={{
                borderRadius: wp("8%"),
                borderWidth: 2,
                borderColor: DefaultStyles.colors.primary,
                overflow: "hidden",
                width: wp("70%"),
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Drawer" component={AppNavigator} />
        </Drawer.Navigator>

    )
}


const WithoutBottomTabnavigator = () => {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen name="Home" component={Home} />
            <StackNavigator.Screen name="TimeSummary" component={TimeSummary} />
            <StackNavigator.Screen name="TimeManagement" component={TimeManagement} />
            <StackNavigator.Screen name="Events" component={Events} />
            <StackNavigator.Screen name="EventDetail" component={EventDetail} />
            <StackNavigator.Screen name="EventSelection" component={EventSelection} />
            <StackNavigator.Screen name="AuthNavigator" component={AuthNavigator} />



        </StackNavigator.Navigator>
    )
}


const AppNavigator = () => {

    return (
        <StackNavigator.Navigator>
            {/* <StackNavigator.Screen name="Root" options={{ headerShown: false }}>
                {props => <MyTabs {...props} />}
            </StackNavigator.Screen> */}
            {/* <StackNavigator.Screen name="AuthNavigator" component={AuthNavigator}
                options={{ headerShown: false }} /> */}

            <StackNavigator.Screen name="withoutBottomTabnavigator" component={WithoutBottomTabnavigator}
                options={{ headerShown: false }} />
        </StackNavigator.Navigator>

    )
}


// const GeneralNavigator = () => {

//     return (

//         <StackNavigator.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}>

//             <StackNavigator.Screen name="HomeNavigator" component={HomeNavigator} />

//             <StackNavigator.Screen name="VideoMatch" component={VideoMatch} />
//             <StackNavigator.Screen name="Premium" component={Premium} />

//             <StackNavigator.Screen name="RecentMatch" component={RecentMatch} />

//         </StackNavigator.Navigator>
//     )
// }

// const HomeNavigator = () => {

//     return (

//         <StackNavigator.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <StackNavigator.Screen name="Home" component={Home} />
//             <StackNavigator.Screen name="Connects" component={Connects } />
//             <StackNavigator.Screen name="AddConnect" component={AddConnect } />

//         </StackNavigator.Navigator>
//     )
// }
// const ChatNavigator = () => {

//     return (

//         <StackNavigator.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <StackNavigator.Screen name="Chat" component={Chat} />
//             <StackNavigator.Screen name="ChatDetail" component={ChatDetail } />
//             {/* <StackNavigator.Screen name="Connects" component={Connects } /> */}
//             {/* <StackNavigator.Screen name="AddConnect" component={AddConnect } /> */}
//             <StackNavigator.Screen name="VideoMatch" component={VideoMatch} />

//         </StackNavigator.Navigator>
//     )
// }

// const BellNavigator = () => {

//     return (

//         <StackNavigator.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <StackNavigator.Screen name="Bell" component={Bell} />
//             <StackNavigator.Screen name="VideoMatch" component={VideoMatch} />


//         </StackNavigator.Navigator>
//     )
// }

// const ProfileNavigator = () => {

//     return (

//         <StackNavigator.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <StackNavigator.Screen name="Profile" component={Profile} />
//             <StackNavigator.Screen name="VideoDetail" component={VideoDetail} />
//             <StackNavigator.Screen name="VideoMatch" component={VideoMatch} />


//         </StackNavigator.Navigator>
//     )
// }

// const MyTabs = () => {

//     return (
//         <Tab.Navigator
//             // tabBarOptions={{
//             //     keyboardHidesTabBar: true,
//             // }}
//             tabBarOptions={{
//                 showIcon: true,
//                 showLabel: false,
//                 keyboardHidesTabBar: true,
//               }}
//             screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: DefaultStyles.colors.textColor,
//                 // keyboardHidesTabBar: true,
//                 tabBarStyle: {
//                     borderTopWidth: 0,
//                     backgroundColor: DefaultStyles.colors.white,
//                     border: 0,
//                     height: wp('18%'),
//                 },
//                 tabBarLabelStyle: {
//                     fontSize: wp('2%'),
//                     fontFamily: "Poppins-Regular",
//                     color: DefaultStyles.colors.primary
//                 },

//             }}>

//             <Tab.Screen name="GeneralNavigator" component={GeneralNavigator}
//                 options={{
//                     tabBarLabel: ({ focused }) => (
//                         <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular", color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>Home</Apptext>
//                     ),
//                     tabBarIcon: ({ focused }) => (
//                         focused ?
//                             <View style={styles.tabBox1}>
//                                 <Image
//                                     source={require('../../assets/whiteHome.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                             :

//                             <View style={styles.tabBox}>
//                                 <Image
//                                     source={require('../../assets/blueHome.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                     )
//                 }} />
//                  <Tab.Screen name="ChatNavigator" component={ChatNavigator}
//                 options={{
//                     tabBarLabel: ({ focused }) => (
//                         <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular", color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>Home</Apptext>
//                     ),
//                     tabBarIcon: ({ focused }) => (
//                         focused ?
//                             <View style={styles.tabBox1}>
//                                 <Image
//                                     source={require('../../assets/whiteChat.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                             :

//                             <View style={styles.tabBox}>
//                                 <Image
//                                     source={require('../../assets/bluechat.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                     )
//                 }} />

//                 <Tab.Screen name="bell" component={BellNavigator}
//                 options={{
//                     tabBarLabel: ({ focused }) => (
//                         <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular", color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>Home</Apptext>
//                     ),
//                     tabBarIcon: ({ focused }) => (
//                         focused ?
//                             <View style={styles.tabBox1}>
//                                 <Image
//                                     source={require('../../assets/whiteBell.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                             :

//                             <View style={styles.tabBox}>
//                                 <Image
//                                     source={require('../../assets/blueBell.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                     )
//                 }} />
//                  <Tab.Screen name="ProfileNavigator" component={ProfileNavigator}
//                 options={{
//                     tabBarLabel: ({ focused }) => (
//                         <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular", color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>Home</Apptext>
//                     ),
//                     tabBarIcon: ({ focused }) => (
//                         focused ?
//                             <View style={styles.tabBox1}>
//                                 <Image
//                                     style={{tintColor:"white"}}
//                                     source={require('../../assets/blueContact.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                             :

//                             <View style={styles.tabBox}>
//                                 <Image
//                                     source={require('../../assets/blueContact.png')}
//                                     resizeMode={"contain"} />
//                             </View>
//                     )
//                 }} />

//         </Tab.Navigator>
//     );
// }



const MainNavigator = () => {

    const user = useSelector((state) => state.auth.user)
    console.log("chkk", user)

    if (user != false) {
        return <DrawerNavigator />
    }
    else {
        return <AuthNavigator />
    }
}

export default MainNavigator;

const styles = StyleSheet.create({
    tabBox: {
        height: wp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('10%'),
        borderRadius: 20,
        // backgroundColor: DefaultStyles.colors.primary
    },
    tabBox1: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        borderRadius: 5,
        backgroundColor: DefaultStyles.colors.secondary
    }
});