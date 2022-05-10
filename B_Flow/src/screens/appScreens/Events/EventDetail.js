import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Image, TouchableOpacity, Modal,
    FlatList, ScrollView, ActivityIndicator, TextInput, Text, View,
    useWindowDimensions
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import { iconPath } from '../../../config/icon';
import { fonts } from '../../../config/Fonts';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import Header from '../../../components/Header';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-crop-picker';


const EventDetail = ({ navigation }) => {

    var radio_props = [
        { label: 'URGENT', value: 0 },
    ];
    const [isVisible, setVisible] = useState(false)
    const [showImg, setShowImg] = useState([])

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            img: iconPath.Img1
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            img: iconPath.Img2
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            img: iconPath.Img3
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed53-3ad53abb28ba',
            img: iconPath.Img1
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd9221aa97f63',
            img: iconPath.Img2
        },
        {
            id: '58694a0f-3da1-471f-bd96-1455741e29d72',
            img: iconPath.Img3
        },
    ];

    const pickImg = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
        });
    }


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

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={"Platform problem"}
                        
                        placeholderTextColor={DefaultStyles.colors.primary}
                    />
                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    style={{ marginTop: wp('5%') }}
                    ListEmptyComponent={() => {
                        return (
                            <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                                No Item Found
                            </Apptext>
                        );
                    }}

                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => { 
                            setVisible(true)
                            setShowImg(item.img)
                        }}
                            style={styles.imgView}>
                            <Image style={styles.imgBoxes} source={item.img} />
                        </TouchableOpacity>
                    )}
                />
                <Modal
                    visible={isVisible}
                    transparent={true}
                    // placeholderStyle={{marginTop:-20, backgroundColor:"red"}}
                    // style={{backgroundColor:"red", flex:1}}

                >
                    <View style={{backgroundColor:"gray", height:'100%'}}>
                    <TouchableOpacity
                    onPress={() => setVisible(false)}
                    style={styles.modelView}>
                    <Image style={[styles.modelView, {marginTop:0}]} source={showImg} />
                    </TouchableOpacity>
                    </View>
                </Modal>


                <View style={{ marginTop: wp("10%") }}>
                    <FormButton
                        buttonTitle={"Add Image or Video"}
                        backgroundColor={DefaultStyles.colors.secondary}
                        color={DefaultStyles.colors.white}
                        width={wp("90%")}
                        fontSize={16}
                        fontFamily={fonts.Lato_Regular}
                        textAlign={"center"}
                        onPress={() => pickImg()}
                    />
                    <FormButton
                        buttonTitle={"Submit"}
                        backgroundColor={DefaultStyles.colors.secondary}
                        color={DefaultStyles.colors.white}
                        width={wp("90%")}
                        fontSize={16}
                        fontFamily={fonts.Lato_Regular}
                        textAlign={"center"}
                    />
                </View>
                <RadioForm
                    radio_props={radio_props}
                    initial={1}
                    buttonSize={20}
                    style={{ alignSelf: 'center', marginTop: wp('3%'), marginBottom:wp('5%') }}
                    buttonColor={DefaultStyles.colors.primary}
                    buttonInnerColor={DefaultStyles.colors.primary}
                    selectedButtonColor={DefaultStyles.colors.secondary}
                    onPress={(value) => { console.log(value) }}

                />

            </ScrollView>
        </View>
    )
}

export default EventDetail;


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
    input: {
        backgroundColor: DefaultStyles.colors.white,
        borderWidth: 1,
        borderColor: DefaultStyles.colors.secondary,
        borderRadius: 7,
        width: wp('90%'),
        height: 200,
        textAlignVertical:'top',
        paddingLeft:15,
        fontSize:18,
        fontFamily:fonts.Lato_Regular,
        alignSelf: 'center',
        marginTop: wp('2%'),
    },
    imgView: {
        marginTop: wp('4%'),
        marginHorizontal: 20,
        marginRight: -10
    },
    imgBoxes: {
        width: 100,
        height: 80,
        borderRadius: 5
    },
    modelView: {
        width:360,
        alignSelf:'center',
        height:270,
        marginTop:wp('40%'),
        // backgroundColor:"red",
        borderRadius:4,
        // borderWidth:1,
        // borderColor:DefaultStyles.colors.secondary
    }

});