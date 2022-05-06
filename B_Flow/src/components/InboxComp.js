import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { fonts } from "../config/Fonts";

function InboxComp({
    countLabel,
    imgName,
    label,
    msg,
    txtDatee,
    backgroundColor,
    contentColor = DefaultStyles.colors.primary,
    onPress,
    style,
}) {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.inboxMainView}>
            <View style={styles.inboxInnerView}>
                {/* <TouchableOpacity style={DefaultStyles.inboxCount}>
          <Apptext style={{color:DefaultStyles.colors.white}}>{countLabel}</Apptext>

          </TouchableOpacity> */}
                <TouchableOpacity style={{marginLeft:wp('1%')}}>
                    <ImageBackground style={styles.inboxImg} source={imgName}>
                      
                    </ImageBackground>
                </TouchableOpacity>
                <Apptext style={styles.inboxName}>{label}</Apptext>

                <Apptext style={styles.inboxDate}>{txtDatee}</Apptext>
            </View>
            <Apptext style={[styles.inboxTxt]}>{msg}</Apptext>
            <Apptext style={[styles.line]}></Apptext>

        </TouchableOpacity>
    );
}


export default InboxComp;

const styles = StyleSheet.create({

 inboxMainView: {
    backgroundColor:'#eef2fa',
    marginTop: wp('4%'),
    alignSelf: 'center',
    width: wp('92%'),
    height: 60,
    borderRadius:5,
    marginBottom:5
  },
  inboxInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: wp('3%')
    
  },
  inboxCount: {
    justifyContent: 'center', alignItems: 'center',
    width: 34, height: 34,
    marginLeft: -17,
    marginTop: -10,
    borderRadius: 20,
    backgroundColor: DefaultStyles.colors.secondary
  },
  inboxImg: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  inboxName: {
    fontSize:15,
    width: wp('56%'),
    marginLeft: wp('3%'),
    marginTop: wp('1%')
  },
  inboxDate: {
    fontSize:14,
    width: wp('16%'),
    marginTop: wp('1%'),
    textAlign: 'right',
    // marginHorizontal:wp('2%'),
    fontFamily:fonts.Lato_Regular
  },
  inboxTxt: {
    color: DefaultStyles.colors.gray, 
    fontSize:11,
    width: 160, alignSelf: 'center',
    marginLeft: -45,
    marginTop: -15,
  },
  


})
