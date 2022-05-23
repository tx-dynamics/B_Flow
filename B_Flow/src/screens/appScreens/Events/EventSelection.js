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
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import { RadioButton } from 'react-native-paper';


const EventSelection = ({ navigation }) => {


    const [isVisible, setVisible] = useState(false)
    const [showImg, setShowImg] = useState([])
    const [isShow, setShow] = useState(false);
    const [isSelected, setSelected] = useState(false);
    const [isdata, setData] = useState([]);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            // img: iconPath.Img1
            img: require('../../../Assets/Images/img1.png')

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            // img: iconPath.Img2
            img: require('../../../Assets/Images/img3.png')

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            // img: iconPath.Img3
            img: require('../../../Assets/Images/img1.png')

        },
        {
            id: 'bd7acbea-c1b1-46c2-aed53-3ad53abb28ba',
            // img: iconPath.Img1,
            img: require('../../../Assets/Images/img2.png')

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd9221aa97f63',
            // img: iconPath.Img2,
            img: require('../../../Assets/Images/img3.png')

        },
        {
            id: '58694a0f-3da1-471f-bd96-1455741e29d72',
            // img: iconPath.Img3
            img: require('../../../Assets/Images/img1.png')

        },
    ];

    const DATA1 = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            date: '03/08/2021 ------------------',
            title: 'Type : Construction site',
            sub_title: 'Concreting pannel P7',

        },

        {
            id: 'bd7acbea-c1b1-436c2-aed5-3ad53abb28ba',
            date1: '03/08/2021 ------------------',
            title: 'Type : Construction site',
            sub_title: 'Concreting pannel P7',

        },
        {
            id: 'bd7a22cbea-c1b1-46c2-aed5-3ad53abb28ba',
            date: '02/08/2021 ------------------',
            title: 'Type : Safety',
            sub_title: 'Barrier missing',

        },
        {
            id: 'bd7acbea-c1b1-4436c2-aed5-3ad53abb28ba',
            date1: '02/08/2021 ------------------',
            title: 'Type : Co-activity',
            sub_title: 'Machines bloquing access',

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

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: wp('5%') }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={iconPath.backImg} />
                </TouchableOpacity>
                <Apptext style={styles.txt} >Chantier ABC -  Métro L15 - lot 4</Apptext>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setShow(!isShow)
                }}
                style={styles.dropDownView}>
                <Apptext style={styles.txt} >Event selection</Apptext>
                <Image source={iconPath.downImg} />
            </TouchableOpacity>
            {
                isShow ?
                    <View>
                        <FlatList
                            data={DATA1}
                            keyExtractor={(item) => item.id}
                            style={{ marginTop: wp('1%'), maxHeight: '97%' }}
                            ListEmptyComponent={() => {
                                return (
                                    <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                                        No Item Found
                                    </Apptext>
                                );
                            }}

                            renderItem={({ item, index }) => (
                                <View>
                                { item.date ?
                                <Apptext style={{
                                        backgroundColor: DefaultStyles.colors.white,
                                        width: wp('90%'),
                                        // height:50,
                                        padding: 10,
                                        alignSelf: 'center',
                                        borderWidth: 1,
                                        borderColor: DefaultStyles.colors.lightgray,
                                        borderRadius: 5,
                                        color:'#c1c7ce'
                                    }}>{item.date}</Apptext> :
                                     null}
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelected(true)
                                            setShow(false)
                                            setData([item])
                                        }}
                                        style={styles.itemView}>
                                        <Apptext style={[styles.itemTxt, { color: "black" }]}>{item.title}</Apptext>
                                        {item.sub_title ?
                                            <Apptext style={[styles.itemTxt, { fontSize: 12 }]} >
                                                {item.sub_title}
                                            </Apptext> : null}
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                    : null}

            {
                isSelected ?
                    <View style={{ marginTop: wp('3%') }}>
                        <FlatList
                            data={isdata}
                            keyExtractor={(item) => item.id}
                            // style={{marginTop:wp('3%')}}
                            ListEmptyComponent={() => {
                                return (
                                    <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                                        No Item Found
                                    </Apptext>
                                );
                            }}

                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={styles.itemView}>
                                    {item.date ? <Apptext style={[styles.itemTxt,
                                    { color: "black", fontFamily: fonts.Lato_Bold }]}>{item.date} </Apptext>
                                        :
                                        <Apptext style={[styles.itemTxt,
                                            { color: "black", fontFamily: fonts.Lato_Bold }]}>{item.date1} </Apptext>
                                    }
                                    <Apptext style={[styles.itemTxt, {
                                        color: "black",
                                        fontFamily: fonts.Lato_Bold
                                    }]}>{item.title}</Apptext>
                                    {item.sub_title ?
                                        <Apptext style={[styles.itemTxt,
                                         { fontSize: 12, color: DefaultStyles.colors.gray }]} >
                                            {item.sub_title}
                                        </Apptext> : null}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    : null}


            <ScrollView>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    // style={{ marginTop: wp('5%') }}
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


                    <LinearGradient style={{ height: '100%' }} colors={['gray', 'transparent', 'gray']} >
                        <FlatList
                            data={DATA}
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={() => {
                                return (
                                    <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                                        No Item Found
                                    </Apptext>
                                );
                            }}

                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => setVisible(false)}
                                    style={styles.modelView}>

                                    <Image style={[styles.modelView, { marginTop: 0 }]} source={DATA[index].img} />

                                </TouchableOpacity>
                            )}
                        />

                    </LinearGradient>

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

                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-evenly',
                    marginHorizontal: wp('3%')
                }}>
                    <FormButton
                        buttonTitle={"Previous event"}
                        backgroundColor={DefaultStyles.colors.secondary}
                        color={DefaultStyles.colors.white}
                        width={wp("44%")}
                        fontSize={16}
                        txtWidth={wp('25%')}
                        fontFamily={fonts.Lato_Regular}
                        textAlign={"center"}


                    />
                    <FormButton
                        buttonTitle={"Next event"}
                        backgroundColor={DefaultStyles.colors.secondary}
                        color={DefaultStyles.colors.white}
                        width={wp("44%")}
                        fontSize={16}
                        txtWidth={wp('12%')}
                        fontFamily={fonts.Lato_Regular}
                        textAlign={"center"}
                    // onPress={() => navigation.navigate("TimeSummary")}

                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default EventSelection;


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
        textAlignVertical: 'top',
        paddingLeft: 15,
        fontSize: 18,
        fontFamily: fonts.Lato_Regular,
        alignSelf: 'center',
        marginTop: wp('2%'),
    },
    imgView: {
        marginTop: wp('4%'),
        marginHorizontal: wp('6%'),
        marginRight: wp(-3)
    },
    imgBoxes: {
        width: 100,
        height: 80,
        borderRadius: 5
    },
    modelView: {
        width: 360,
        alignSelf: 'center',
        height: 270,
        // marginTop: wp('10%'),
        // backgroundColor:"red",
        borderRadius: 4,
        // borderWidth:1,
        // borderColor:DefaultStyles.colors.secondary
    },
    txt: {
        fontFamily: fonts.Lato_Regular,
        fontSize: 15,
        color: DefaultStyles.colors.black,
        // backgroundColor:"red",
        width: wp('70%'),
    },
    dropDownView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: DefaultStyles.colors.white,
        width: wp('90%'),
        height: 50,
        marginTop: wp('7%'),
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: DefaultStyles.colors.secondary,
        borderWidth: 0.5
    },
    itemView: {
        backgroundColor: DefaultStyles.colors.white,
        width: wp('90%'),
        // height:50,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: DefaultStyles.colors.lightgray,
        borderRadius: 5
    },
    itemTxt: {
        fontFamily: fonts.Poppins_Regular,
        fontSize: 14,
        color: DefaultStyles.colors.gray
    }
});