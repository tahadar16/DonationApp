import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../Colors";

const InputField = ({label, placeholder, keywboardType = "default", secureTextEntry = false, onTextChanged}) => {
    return (
        <View>
            <Text style= {style.label}>{label}</Text>
            <TextInput 
                style= {style.input} 
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry} 
                keyboardType={keywboardType}
                onChangeText={(value)=>onTextChanged(value)}
                />
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
        borderBottomWidth: 1,
        borderBottomColor: Colors.QuickSilver
    }
})

export default InputField