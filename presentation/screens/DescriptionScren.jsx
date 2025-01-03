import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/common/Button";
import Back from "../components/common/Back";
import globalStyle from "../globalstyle";
import Tag from "../components/common/Tag";
import Title from "../components/common/Title";
import SafeScreen from "../components/common/SafeScreen";
import Spacer from "../components/common/Spacer";

const DescriptionScreen = ({navigation, route}) => {
    const donationItem = route.params.donationItem
    return (
        <SafeScreen style = {globalStyle.lightfullScreen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Back ctaAction = {()=> navigation.goBack()}/>
                    <View style = {style.imageContainer}>
                        <Image source={{uri : donationItem.image}} style={style.image}/>
                    </View>
                    <Spacer height={8} />
                    <Tag title = {route.params.tag}/>
                    <Spacer height={8} />
                    <Title title={donationItem.name} titleStyle= {style.titleStyle}/>
                    <Text style = {style.description}>{donationItem.description}</Text>
                </ScrollView>
                <AppButton ctaText={"Donate"} ctaAction = {()=> {}} />
        </SafeScreen>
    )
}

const style = StyleSheet.create({
    description: {
        marginBottom: 8,
        fontFamily: "inter-regular",
        fontSize: 14
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 5
    },
    imageContainer: {
        height: 240,
        width: "100%",
        marginVertical: 12
    },
    titleStyle: {
        marginVertical: 8,
    }

})

export default DescriptionScreen