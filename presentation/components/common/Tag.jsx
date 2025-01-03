import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Colors";

const Tag = props => {
    return (
        <View style = {style.container}>
            <Text style = {style.text}>
                {props.title}
            </Text>
        </View>
    )
};

PropTypes.Tag = {
    title : PropTypes.string.isRequired,
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.MidnightGreen
    },
    text: {
        fontSize: 10,
        fontFamily: "inter_seni_bold",
        color: Colors.White
    }
})

export default Tag
