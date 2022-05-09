import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Image, TouchableOpacity,
    FlatList, ScrollView, ActivityIndicator, Text, View,
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


const TimeManagement = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Mansour Dieng',
            time:"7 Hours"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Konate paris',
            time:"8 Hours"

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Pierre Capri',
            time:"12 Hours"
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

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Internal' },
        { key: 'second', title: 'External' },
    ]);

    return (
        <View style={styles.container}>
            <Header
                leftImgName={iconPath.backImg}
                onPressLeft={() => navigation.goBack()}
                headerLabel={"Time Management"}
            />
            <ScrollView>
             <View style={styles.box}>
             <Image style={styles.img} source={iconPath.bigBoyImg} />
             <View style={styles.DirectionView}>
                 <Apptext style={styles.apTxt} >Manuel Rebiero</Apptext>
                 <Apptext style={styles.apTxt}>External</Apptext>
             </View>
             <View style={styles.DirectionView}>
                 <Apptext style={styles.stTxt}>Site Manager</Apptext>
             </View>
             <View style={styles.DirectionView}>
             <TouchableOpacity style={styles.dates}>
                <Apptext style={styles.dateTxt} >Today’s Date</Apptext>
                <Image style={{marginHorizontal:wp('3%')}} source={iconPath.downImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates}>
                <Apptext style={styles.dateTxt} >7 Hours</Apptext>
                <Image style={{marginHorizontal:wp('3%')}} source={iconPath.downImg} />
                </TouchableOpacity>
             </View>
             </View>
             <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: wp("8%") }}>
                <FormButton
                    buttonTitle={"Summary"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("42%")}
                    fontSize={18}
                    fontFamily={fonts.Lato_Regular}
                    textAlign={"center"}

                />
                     <FormButton
                    buttonTitle={"Submit"}
                    backgroundColor={DefaultStyles.colors.secondary}
                    color={DefaultStyles.colors.white}
                    width={wp("42%")}
                    fontSize={16}
                    fontFamily={fonts.Lato_Regular}
                    textAlign={"center"}
                    onPress={() => navigation.navigate("Events")}
                />
            </View>

            </ScrollView>
        </View>
    )
}

export default TimeManagement;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6edf8',
        flex: 1
    },
    box:{
        width:wp('90%'),
        backgroundColor:DefaultStyles.colors.white,
        height:wp('135%'),
        alignSelf:'center',
        borderRadius:10
    },
    img:{
        alignSelf:'center',
        borderRadius:10,
        marginTop:wp('5%')
    },
    DirectionView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:wp('4%')
    },
    apTxt:{
        fontSize:14,
        color:DefaultStyles.colors.primary,
        marginTop:wp('3%')
    },
    stTxt:{
        fontSize:14,
        color:DefaultStyles.colors.secondary,
    },
    dates:{
        flexDirection:'row',
        borderRadius:5,
        borderWidth:1,
        borderColor:DefaultStyles.colors.secondary   ,
        width:wp('40%'),
        height:50,
        marginTop:wp('3%'),
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },
    dateTxt:{
        fontFamily:fonts.Lato_Bold,
        fontSize:16,
        marginHorizontal:wp('3%')
    },


});