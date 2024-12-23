import React from "react";
import { Text, View } from "react-native";
import globalStyle from "../globalstyle";

const HomeScreen = ()=> {
    return (
        <View style = {globalStyle.lightfullScreen}>
            <Text>
                This is HomeScreen
            </Text>
        </View>
    )
}

export default HomeScreen;