import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { Colors } from "../../Colors";

const InputField = ({label, placeholder, type}) => {
    return (
        <View>
            <Text style= {style.label}>{label}</Text>
            <TextInput placeholder={placeholder} keyboardType={type}/>
        </View>
    )
}

const style = StyleSheet.create({
    label : {
        fontFamily: "inter-regular",
        fontSize: 12,
        color: Colors.Charcoal
    },
    input: {
        color: Colors.OxfordBlue,
        fontSize: 16,
        fontFamily: "inter-medium",
        paddingVertical: 12,
        borderBottomColor: Colors.QuickSilver
    }
})

export default InputField