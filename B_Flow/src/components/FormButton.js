import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from './Apptext';
import DefaultStyles from "../config/Styles";
import { fonts } from '../config/Fonts';

  const FormButton = ({width = wp('80%'), height=wp('15%'),
    color= '#ffffff',
    buttonTitle,onPress, style,
    borderWidth,borderColor,
   backgroundColor= DefaultStyles.colors.primary,
   borderRadius=5, fontSize= 13,txtWidth,
   textAlign,fontFamily = fonts.Lato_Bold ,
   ...rest}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.buttonContainer, {width:width,
     height:height,
    backgroundColor: backgroundColor,
    borderWidth:borderWidth,
    borderColor:borderColor,
     borderRadius:borderRadius}]} {...rest}>
      <Apptext style={[styles.buttonText, {textAlign:textAlign,
        fontFamily:fontFamily,
        width:txtWidth,
        color: color, fontSize: fontSize}]} {...rest}>{buttonTitle}</Apptext>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom:wp('5%'),
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  buttonText: {
    fontFamily:fonts.Lato_Bold 
  },
});
