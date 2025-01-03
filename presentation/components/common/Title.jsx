import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../Colors";

const Title = ({title, titleStyle})=> {
    return (
        <Text style = {[style.title, titleStyle]}>{title}</Text>
    )
}

const style = StyleSheet.create({
    title: {
        fontFamily: "inter_semi_bold",
        color: Colors.OxfordBlue,
        fontSize: 24,
    }
})

export default Title