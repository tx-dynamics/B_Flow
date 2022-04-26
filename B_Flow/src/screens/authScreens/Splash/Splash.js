import React,{useState, useEffect} from 'react';
import {StyleSheet,Image,ScrollView,ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import { iconPath } from '../../../config/icon';
import { fonts } from '../../../config/Fonts';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';


const Splash = ({navigation}) => {

    return (
        // <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
        //     <Text>Imam</Text>
        // </View>
        <ScrollView style ={styles.container}>
            <Image
            source={iconPath.SplashImg}
            style={styles.splashImage}
            // resizeMode={"contain"}
            />
            {/* <ActivityIndicator  animating color={'white'} size={'small'} style={{marginBottom:80}}  />  */}
            <Image
            source={iconPath.Logo}
            style={styles.logo}
            // resizeMode={"contain"}
            />
            <Apptext style={styles.txt} >Real time access to construction site data</Apptext>
            <View style={{marginTop:widthPercentageToDP("5%")}}>
            <FormButton
            buttonTitle={"CREATE NEW ACCOUNT"}
            backgroundColor={DefaultStyles.colors.secondary}
            color={DefaultStyles.colors.white}
            width={widthPercentageToDP("90%")}
            onPress={() => navigation.navigate("Signup") }
            />
            <FormButton
            buttonTitle={"LOGIN TO YOUR ACCOUNT"}
            backgroundColor={DefaultStyles.colors.primary}
            color={DefaultStyles.colors.white}
            width={widthPercentageToDP("90%")}
            onPress={() => navigation.navigate("Login") }
            />
            </View>
           
        </ScrollView>
    )
}

export default Splash;


const styles = StyleSheet.create({
    container :{
        backgroundColor : DefaultStyles.colors.white ,
        flex:1
    },
    splashImage:{
        // flex:1,
        width:360,
        height:580
        // height:200,
        // alignSelf:"center"
    },
    logo:{
        alignSelf:'center',
        marginTop:widthPercentageToDP('5%')
    },
    txt:{
        fontSize:17,
        color:DefaultStyles.colors.primary,
        textAlign:'center',
        fontFamily: fonts.Lato_Bold
    }

  });