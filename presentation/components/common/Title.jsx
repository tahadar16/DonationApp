import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../Colors";

const Title = ({title, fontSize = 24})=> {
    return (
        <Text style = {[style.title, {fontSize: fontSize}]}>{title}</Text>
    )
}

const style = StyleSheet.create({
    title: {
        fontFamily: "inter_semi_bold",
        color: Colors.OxfordBlue
    }
})

export default Title