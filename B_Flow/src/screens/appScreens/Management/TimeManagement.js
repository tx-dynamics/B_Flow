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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



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

    const [showCal, setShowCal] = useState(false)


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
             <TouchableOpacity 
             onPress={() => setShowCal(!showCal)}
             style={styles.dates}>
                <Apptext style={styles.dateTxt} >Today’s Date</Apptext>
                <Image style={{marginHorizontal:wp('3%')}} source={iconPath.downImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates}>
                <Apptext style={styles.dateTxt} >7 Hours</Apptext>
                <Image style={{marginHorizontal:wp('3%')}} source={iconPath.downImg} />
                </TouchableOpacity>
             </View>
             </View>
             {showCal ?
                    <Calendar
                        // Initially visible month. Default = now
                        current={'2012-03-01'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2012-05-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2012-05-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={day => {
                            console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={direction => <Arrow />}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={true}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={true}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={true}
                        // Disable right arrow. Default = false
                        disableArrowRight={true}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}
                        // Replace default month and year title with custom one. the function receive a date as parameter
                        renderHeader={date => {
                            /*Return JSX*/
                        }}
                        // Enable the option to swipe between months. Default = false
                        enableSwipeMonths={true}
                        style={{
                            borderWidth: 1,
                            borderColor: DefaultStyles.colors.secondary,
                            height: 300,
                            borderTopColor: DefaultStyles.colors.white,
                            alignSelf: 'center',
                            borderRadius: 15,
                            width: wp('90%')
                        }}
                        // Specify theme properties to override specific styles for calendar parts. Default = {}
                        theme={{
                            backgroundColor: '#fffff',
                            calendarBackground: DefaultStyles.colors.secondary,
                            textSectionTitleColor: '#b6c1cd',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            disabledArrowColor: '#d9e1e8',
                            monthTextColor: 'blue',
                            indicatorColor: 'blue',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                    />
                    : null}
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