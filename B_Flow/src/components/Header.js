import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { fonts } from "../config/Fonts";

function Header({
  headerLabel,
  backgroundColor,
  leftImgName,
  centerImg,
  isBack = true,
  height = wp("18%"),
  contentColor = DefaultStyles.colors.secondary,
  onPressLeft,
  onPressRight,
  rightImg,
  style,
}) {
  return (
    <SafeAreaView>
    <View
      style={{
        ...styles.container,
        height:height,
        backgroundColor: backgroundColor,
        ...style,
      }}
    >
     
      <TouchableOpacity 
      onPress={onPressLeft} 
      style={{width:wp('6%')}}>
      {isBack ? (
        <Image source={leftImgName} />
      ) : null}
      </TouchableOpacity>
      <View style={{alignItems:'center', width:wp('60%'),}}>
      <Image source={centerImg} />
      <Apptext style={styles.headerLabel} >{headerLabel}</Apptext>
      </View>
      <TouchableOpacity style={{width:wp('15%')}} onPress={onPressRight}>
        <Image style={{width:53, height:24}} source={rightImg} />
      </TouchableOpacity>


    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
 
  container: {
    width: wp("100%"),
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: wp('5%'),
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
    // elevation: 3,
  },
  headerLabel:{
    fontFamily:fonts.Lato_Bold,
    color:DefaultStyles.colors.black,
    fontSize:20,
    marginLeft:wp('10%')
    // backgroundColor:"red",
  }
});

export default Header;
