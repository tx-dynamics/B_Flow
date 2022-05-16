import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity,ScrollView, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import { iconPath } from '../../../config/icon';
import { fonts } from '../../../config/Fonts';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import FormInput from '../../../components/FormInput';


const Signup = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <Image
                source={iconPath.CrainImg}
                style={styles.splashImage}
            />
            <View style={{ marginHorizontal: wp('5%') }}>
                <Apptext style={styles.txt} >Lets Register Account</Apptext>
            </View>
            <View style={{marginTop:wp('5%')}}>
            <FormInput 
            borderWidth={1}
            placeholderText={"Username"}
            />
            <FormInput 
            borderWidth={1}
            placeholderText={"Email"}
            />
            <FormInput 
            borderWidth={1}
            placeholderText={"Password"}
            />
            <FormInput 
            borderWidth={1}
            placeholderText={"Confirm Password"}
            />
            </View>
         
            <View style={{ marginTop: wp("10%") }}>
                <FormButton
                    buttonTitle={"Sign up"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("90%")}
                    fontSize={18}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} >
            <Apptext style={styles.txt1} >Already have an account? Login?</Apptext>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Signup;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1
    },
    splashImage: {
        width:wp('100%'),
        height: wp('28%')
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
        marginBottom: wp('5%'),
        marginTop: wp('4%')
    }

});