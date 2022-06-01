import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import { iconPath } from '../../../config/icon';
import { fonts } from '../../../config/Fonts';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import FormInput from '../../../components/FormInput';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { setUser } from '../../../Redux/actions/authAction';


const Login = ({ navigation }) => {

    let dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <Image
                source={iconPath.CrainImg}
                style={styles.splashImage}
            />
            <View style={{ marginHorizontal: wp('5%') }}>
                <Apptext style={styles.txt} >Lets Sign you in</Apptext>
            </View>
            <View style={{marginTop:wp('5%')}}>
            <FormInput 
            borderWidth={1}
            placeholderText={"Email"}
            />
            <FormInput 
            borderWidth={1}
            placeholderText={"Password"}
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'flex-end', marginHorizontal:wp('6%')}}>
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Apptext style={styles.frgps} >Forgot Password ?</Apptext>
            </TouchableOpacity>
            </View>
            <View style={{ marginTop: wp("5%") }}>
                <FormButton
                    buttonTitle={"Sign in"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("90%")}
                    fontSize={18}
                    onPress={() =>  {
                    // navigation.navigate("Home")
                    dispatch(setUser(true))
                    }}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Apptext style={styles.txt1} >You don’t have an account ? Create one !</Apptext>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Login;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        width:wp('100%'),
        height:wp('100%')
    },
    splashImage: {
        width:wp('100%'),
        height:wp('100%')
        // height:200,
        // alignSelf:"center"
    },

    txt: {
        marginTop: wp('6%'),
        fontSize: 20,
        color: DefaultStyles.colors.textColor,
        fontFamily: fonts.Lato_Bold
    },
    frgps:{
        fontFamily:fonts.Lato_Regular,
        fontSize:15,
        marginTop:wp('4%'),
    },
    txt1: {
        fontSize: 13,
        color: DefaultStyles.colors.primary,
        textAlign: 'center',
        fontFamily: fonts.Lato_Regular,
        marginBottom: wp('10%'),
        marginTop: wp('2%')
    }

});