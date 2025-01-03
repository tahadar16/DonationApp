import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/common/Button";
import globalStyle from "../globalstyle";
import Title from "../components/common/Title";
import SafeScreen from "../components/common/SafeScreen";
import { Colors } from "../Colors";
import InputField from "../components/common/InputField";

const LoginScreen = ({navigation, route}) => {

    return (
        <SafeScreen style = {globalStyle.lightfullScreen}>
                <View style={style.container}>
                    <Title title={"Welcome Back"} titleStyle={{marginVertical: 24}}/>
                    <InputField label={"Email"} placeholder={"Enter your email"} type={"email-address"}/>
                    <AppButton ctaText={"Login"} ctaAction = {()=> {}} />
                    <Title title={"Don't have an account?"} titleStyle={{marginVertical: 24, color: Colors.OxfordBlue}}/>
                </View>
        </SafeScreen>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    
    },
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

export default LoginScreen