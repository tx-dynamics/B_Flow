import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Image, TouchableOpacity,
    FlatList, ScrollView, ActivityIndicator,TextInput, Text, View,
    useWindowDimensions
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import { iconPath } from '../../../config/icon';
import { fonts } from '../../../config/Fonts';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import Header from '../../../components/Header';
import { TabView, SceneMap } from 'react-native-tab-view';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const Events = ({ navigation }) => {

  

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Mansour Dieng',
            time: "7 Hours"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Konate paris',
            time: "8 Hours"

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Pierre Capri',
            time: "12 Hours"
        },
    ];

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    var radio_props = [
        { label: 'RH', value: 0 },
        { label: 'Construction Site', value: 1 },
        { label: 'Planning', value: 2 },
        { label: 'Clients', value: 3 },
        { label: 'Sub-contractors', value: 4 }
    ];

    var radio_props1 = [
        { label: 'QPE', value: 0 },
        { label: 'Finance', value: 1 },
        { label: 'To be defined', value: 2 },
        { label: 'To be defined', value: 3 },
        { label: 'To be defined', value: 4 }
    ];

    return (
        <View style={styles.container}>
            <Header
                leftImgName={iconPath.backImg}
                headerLabel={"Add New Event"}
                onPressLeft={() => navigation.goBack()}
            />
            <ScrollView>
                <View>
                    <Apptext style={styles.title}>Chantier ABC -  Métro L15 - lot 4</Apptext>
                </View>
                <View style={{marginTop:wp('5%'),flexDirection:'row', 
                justifyContent:'space-between', marginHorizontal:wp('5%')  }}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    buttonSize={20}
                    buttonColor={DefaultStyles.colors.primary}
                    buttonInnerColor={'red'}
                    selectedButtonColor={DefaultStyles.colors.secondary}
                    onPress={(value) => { console.log(value) }}
                />
                    <RadioForm
                    radio_props={radio_props1}
                    initial={1}
                    buttonSize={20}
                    buttonColor={DefaultStyles.colors.primary}
                    buttonInnerColor={'red'}
                    selectedButtonColor={DefaultStyles.colors.secondary}
                    onPress={(value) => { console.log(value) }}
                />
                </View>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder={"Speech to text"}
                    placeholderTextColor={DefaultStyles.colors.primary}
                    
                    />
                </View>
                <View style={{ marginTop: wp("5%") }}>
                    <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={iconPath.micImg} />
                    </TouchableOpacity>
                    <FormButton
                        buttonTitle={"Submit"}
                        backgroundColor={DefaultStyles.colors.secondary}
                        color={DefaultStyles.colors.white}
                        width={wp("90%")}
                        fontSize={18}
                        fontFamily={fonts.Lato_Regular}
                        textAlign={"center"}
                        onPress={() => navigation.navigate("EventDetail")}
                    />
                </View>
             

            </ScrollView>
        </View>
    )
}

export default Events;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6edf8',
        flex: 1
    },
    title: {
        alignSelf: 'center',
        marginTop: wp('3%'),
        color: DefaultStyles.colors.black,
        fontFamily: fonts.Poppins_Regular
    },
    buttonContainer: {
        marginBottom:wp('5%'),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:DefaultStyles.colors.secondary,
        color:DefaultStyles.colors.white,
        width:wp("90%"),
        fontSize:18,
        height:wp('16%'),
        borderRadius:5,
        fontFamily:fonts.Lato_Regular,
        textAlign:"center"
      },
      input:{
        backgroundColor:DefaultStyles.colors.white,
        borderWidth:1,
        borderColor:DefaultStyles.colors.secondary,
        borderRadius:7,
        width:wp('90%'),
        textAlignVertical:'top',
        paddingLeft:15,
        fontSize:18,
        fontFamily:fonts.Lato_Regular,
        height:200,
        alignSelf:'center',
        marginTop:wp('5%')
      }

});