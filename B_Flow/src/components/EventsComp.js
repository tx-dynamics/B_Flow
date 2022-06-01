import React from "react";
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { fonts } from "../config/Fonts";

function EventsComp({
    style,
    source,
    rightHeading,
    leftHeading,
    title,
    desc,
    nums,
    onPress

}) {
    console.log(source)
    return (
        <View
            style={{
                ...styles.container,
                ...style,
            }}>
            <FlatList
                data={source}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => {
                    return (
                        <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                            No Item Found
                        </Apptext>
                    );
                }}
                stickyHeaderIndices={[0]}
                ListHeaderComponent={() => {
                    return (
                        <TouchableOpacity
                            style={styles.headerFooterContainer}>
                            <Apptext style={{
                                fontSize: 17, fontFamily: fonts.Poppins_Medium,
                                color: DefaultStyles.colors.primary
                            }}>{leftHeading}</Apptext>

                            <Apptext style={{
                                fontSize: 17, fontFamily: fonts.Poppins_Medium,
                                color: DefaultStyles.colors.primary
                            }}>{rightHeading}</Apptext>

                        </TouchableOpacity>
                    )
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    onPress={onPress}
                    style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{marginHorizontal:wp('2%'), marginTop:wp('4%')}}>
                        <Apptext style={styles.itmTxt}>Events On 03/08/2021</Apptext>
                        <Apptext style={styles.btmTxt}>Hi! Please start working</Apptext>
                    </View>
                        <Apptext style={styles.numTxt}>5</Apptext>
                    </TouchableOpacity>
                )}



            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 5,
        marginBottom:wp('10%')
    },
    headerFooterContainer: {
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: DefaultStyles.colors.secondary,
        // width:wp('100%'),
        borderRadius:5,
    },
    itmTxt:{
        fontFamily:fonts.Lato_Regular,
        fontSize:16,
        marginTop:wp('1%'),
    },
    btmTxt:{
        fontFamily:fonts.Lato_Regular,
        fontSize:14,
        marginTop:wp('1%'),
        color:DefaultStyles.colors.gray
    },
    numTxt:{
        fontFamily:fonts.Lato_Regular,
        fontSize:16,
        marginTop:wp('1%'),
        marginTop:wp('4%'),
        marginHorizontal:wp('3%')  
    }
});

export default EventsComp;
