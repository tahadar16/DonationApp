import React from "react";
import { View } from "react-native";
import globalStyle from "../globalstyle";
import Title from "../components/Title";
import AppButton from "../components/Button";

const HomeScreen = ()=> {
    return (
        <View style = {globalStyle.lightfullScreen}>
            <Title title={"This is HomeScreen"}/>
            <AppButton ctaqqqext={"Donate"} ctaAction={()=> {}} />
        </View>
    )
}

export default HomeScreen;