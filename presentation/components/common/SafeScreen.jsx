import React from "react";
import { SafeAreaView, View } from "react-native";
import globalStyle from "../../globalstyle";

const SafeScreen = ({children, style}) => {
    return (
        <SafeAreaView style= {style}>
            <View style = {globalStyle.fullScreenContainer}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default SafeScreen

