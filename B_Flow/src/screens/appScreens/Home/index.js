import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity,
FlatList,ScrollView, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import { iconPath } from '../../../config/icon';
import { fonts } from '../../../config/Fonts';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import FormInput from '../../../components/FormInput';
import Header from '../../../components/Header';
import EventsComp from '../../../components/EventsComp';
import {DrawerActions, useNavigation} from '@react-navigation/native'



const Home = ({ navigation }) => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      
    return (
        <View style={styles.container}>
        <Header 
        leftImgName={iconPath.MenuImg}
        onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        headerLabel={"Home"}
        rightImg={iconPath.smallLogo}
        />

        <ScrollView>

            <TouchableOpacity>
            <Image 
            source={iconPath.boyImg}
            style={styles.imgView}
            />
            </TouchableOpacity>
        
            <View style={{alignSelf:'center',}}>
                <Apptext style={styles.txt} >Manuel Ribeiro</Apptext>
                <Apptext style={[styles.txt, {color:DefaultStyles.colors.secondary}]} >Site manager</Apptext>
                <Apptext style={styles.txt} >Site ABC</Apptext>                
            </View>
            {/* ///////////////////////////////////////////////////////// */}
            <View style={{flexDirection:'row', justifyContent:'space-evenly',marginHorizontal:wp('3%'), marginTop: wp("8%") }}>
                <FormButton
                    buttonTitle={"Time Management"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("44%")}
                    fontSize={20}
                    fontFamily={fonts.Lato_Regular}
                    textAlign={"center"}

                />
                     <FormButton
                    buttonTitle={"Machine Management"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("44%")}
                    fontSize={20}
                    fontFamily={fonts.Lato_Regular}
                    textAlign={"center"}
                />
            </View>
            <FormButton
                    buttonTitle={"Add New Event"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("90%")}
                    fontSize={18}
                    fontFamily={fonts.Lato_Regular}
                    textAlign={"center"}
                />
            <View>
                <EventsComp
                source={DATA}
                rightHeading={"Amount of event"}
                leftHeading={"Event"}
                onPress={() => navigation.navigate("TimeSummary")}
                />
            </View>

        </ScrollView>
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1
    },
    imgView:{
        width:60, height:60,
        marginTop:wp('8%'),
        // backgroundColor:"red",
        borderColor:DefaultStyles.colors.lightgray,
        borderWidth:1,
        borderRadius:30,
        alignSelf:'center'
    },
    txt: {
        marginTop: wp('3%'),
        fontSize: 14,
        textAlign:'center',
        color: DefaultStyles.colors.primary,
        fontFamily: fonts.Lato_Bold
    },
 

});