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
import FormInput from '../../../components/FormInput';
import Header from '../../../components/Header';
import EventsComp from '../../../components/EventsComp';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import InboxComp from '../../../components/InboxComp';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const TimeSummary = ({ navigation }) => {

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
        <View style={{ 
             flex: 1,
             backgroundColor: '#ff4081'
             }} />
    );

    const SecondRoute = () => (
        <View style={{
             flex: 1,
             backgroundColor: '#673ab7'
             }} />
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
                headerLabel={"Time Summary"}
            />

            <ScrollView>

                <TabView
                    
                    // indicatorStyle={{ backgroundColor: 'white' }}
                    style={{
                    marginTop:wp('5%'),
                    }}
                    renderTabBar={props => <TabBar 
                    activeColor={DefaultStyles.colors.secondary} 
                    inactiveColor={DefaultStyles.colors.gray}
                    indicatorStyle={{ backgroundColor:DefaultStyles.colors.secondary , height: 1 }}
                    // indicatorStyle={{backgroundColor:"red", color:"green"}}
                    indicatorContainerStyle={{backgroundColor:"#e6edf8"}}
                    // contentContainerStyle={{backgroundColor:'#e6edf8'}}
                    
                    {...props} />}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
               
                {/* ///////////////////////////////////////////////////////// */}
                
                <TouchableOpacity 
                onPress={() => {}}
                style={styles.dates}>
                <Apptext style={styles.dateTxt} >Today’s Date</Apptext>
                <Image style={{marginHorizontal:wp('3%')}} source={iconPath.downImg} />
                </TouchableOpacity>

                <View style={styles.intrlTxt }>
                <Apptext style={styles.dateTxt} >Internal</Apptext>
                <Apptext style={styles.dateTxt} >Amount</Apptext> 
                </View>

                <View style={{marginTop:wp('2%')}}>
                <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => {
                    return (
                        <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                            No Item Found
                        </Apptext>
                    );
                }}
                
                renderItem={({ item, index }) => (
                    <InboxComp
                    imgName={iconPath.chatImg}
                    label={item.title}
                    msg={"Sub-contractors"}
                    txtDatee={item.time}
                    onPress={() => navigation.navigate("TimeManagement")}
                    />
                )}



            />
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default TimeSummary;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6edf8',
        flex: 1
    },
    dates:{
        flexDirection:'row',
        borderRadius:5,
        borderWidth:1,
        borderColor:DefaultStyles.colors.secondary   ,
        width:wp('90%'),
        height:50,
        backgroundColor:DefaultStyles.colors.white,
        marginTop:wp('7%'),
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },
    dateTxt:{
        // backgroundColor:"red",
        fontFamily:fonts.Lato_Bold,
        fontSize:16,
        marginHorizontal:wp('3%')
    },
    intrlTxt:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:wp('2%'),
        marginTop:wp('5%')
    }


});