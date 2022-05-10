import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DefaultStyles from "../../config/Styles";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "../../components/Apptext";
import { iconPath } from "../../config/icon";
import { fonts } from "../../config/Fonts";


function DrawerContent({ navigation, userImg, username, userEmail }) {
 
    const [isDark, setDark] = useState(false)

  return (
  <View style={styles.container} >
    
        <TouchableOpacity>
        <Image style={styles.imgView} source={iconPath.boyImg} />
        </TouchableOpacity>
        <View style={{alignSelf:'center',}}>
                <Apptext style={styles.txt} >Manuel Ribeiro</Apptext>
                <Apptext style={[styles.txt, {color:DefaultStyles.colors.secondary}]} >Site manager</Apptext>
                <Apptext style={styles.txt} >Site ABC</Apptext>                
        </View>

  
    <ScrollView style={{marginTop:wp('12%')}}>
    <TouchableOpacity 
    style={styles.listView}>
    <Apptext style={styles.innerTxt} > Site ABC</Apptext>
    </TouchableOpacity>
    <TouchableOpacity 
    style={styles.listView1}>

    <Apptext style={styles.innerTxt} > Site DEF</Apptext>
    </TouchableOpacity>
    <TouchableOpacity 
    style={styles.listView1}>

    <Apptext style={styles.innerTxt} > Site GHI</Apptext>
    </TouchableOpacity>
    
    <TouchableOpacity >

    <Apptext style={styles.lgTxt}> Logout</Apptext>
    </TouchableOpacity>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 0,
    flex:1,
    backgroundColor:DefaultStyles.colors.primary,
    // paddingTop: -50
},
imgView:{
    marginTop:wp('15%'),
    width:70,
    height:70,
    borderRadius:50,
    alignSelf:'center',
    // backgroundColor:"red"
},
txt: {
    marginTop: wp('3%'),
    fontSize: 14,
    textAlign:'center',
    color: DefaultStyles.colors.white,
    fontFamily: fonts.Lato_Bold
},

listView:{
    flexDirection:'row',
    width:wp('70%'),
    height:wp('18%'),
    backgroundColor:DefaultStyles.colors.secondary,
    borderRadius:8,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    marginHorizontal:wp('10%'),
    marginTop:wp('2%'),
    alignItems:'center',
    // justifyContent:'center'
    // alignSelf:'center'
},
listView1:{
    flexDirection:'row',
    width:wp('70%'),
    height:wp('18%'),
    backgroundColor:DefaultStyles.colors.primary,
    borderRadius:8,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    marginHorizontal:wp('10%'),
    marginTop:wp('2%'),
    alignItems:'center',
    // justifyContent:'center'
    // alignSelf:'center'
},
innerTxt:{
    fontFamily:fonts.Poppins_Medium,
    fontSize:17,
    marginTop:wp('1%'),
    width:wp('52%'),
    marginHorizontal:wp('10%'),
    color:DefaultStyles.colors.white
},
lgTxt:{
  fontFamily:fonts.Poppins_Medium,
  fontSize:17,
  marginTop:wp('80%'),
  width:wp('52%'),
  marginHorizontal:wp('23%'),
  marginBottom:wp('10%'),
  color:DefaultStyles.colors.secondary
},

});

export default DrawerContent;
