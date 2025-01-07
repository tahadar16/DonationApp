import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../Colors";

const Tab = props => {
    return (
        <TouchableOpacity 
            style = {[style.container, !props.selected && style.inActive, !props.enabled && style.disabled, props.btnStyle]}
            onPress={() => { props.enabled && props.ctaAction(props.tabId)}}
            activeOpacity={0.8}>
                <Text style = {[style.text, !props.selected && style.inActiveText]}>
                    {props.ctaText}
                </Text>
        </TouchableOpacity>
    )
};

Tab.defaultProps = {
    selected : false,
    enabled : true
}


PropTypes.Tab = {
    tabId: PropTypes.number.isRequired,
    ctaText : PropTypes.string.isRequired,
    selected : PropTypes.bool,
    ctaAction : PropTypes.func,
    btnStyle : PropTypes.object
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        width: "auto",
        borderRadius: 100,
        paddingVertical: 16,
        paddingHorizontal: 28,
        backgroundColor: Colors.Crayola
    },
    disabled: {
        opacity: 0.5,
    },
    inActive: {
        backgroundColor: Colors.Cultured,
    },
    inActiveText: {
        fontSize: 14,
        fontFamily: "inter_medium",
        color: Colors.SlateGrey
    },
    text: {
        fontSize: 14,
        fontFamily: "inter_medium",
        color: Colors.White
    }
})

export default Tab
