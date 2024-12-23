import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../Colors";

const AppButton = props => {
    return (
        <TouchableOpacity 
            style = {[style.container, !props.enabled && style.disabled, props.btnStyle]}
            onPress={props.enabled && props.ctaAction()}
            activeOpacity={0.8}>
                <Text style = {style.text}>
                    {props.ctaText}
                </Text>
        </TouchableOpacity>
    )
};

AppButton.defaultProps = {
    enabled : true
}


PropTypes.AppButton = {
    ctaText : PropTypes.string.isRequired,
    enabled : PropTypes.bool,
    ctaAction : PropTypes.func,
    btnStyle : PropTypes.object

}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        paddingVertical: 16,
        backgroundColor: Colors.Crayola
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontSize: 16,
        fontFamily: "inter_medium",
        color: Colors.White
    }
})

export default AppButton
