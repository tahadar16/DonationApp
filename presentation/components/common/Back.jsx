import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const Back = props => {
    return (
        <TouchableOpacity 
            style = {[style.container, props.btnStyle]}
            onPress={props.ctaAction}
            activeOpacity={0.8}>
                <FontAwesomeIcon icon={faArrowLeft}/>
        </TouchableOpacity>
    )
};


PropTypes.Back = {
    ctaAction : PropTypes.func,
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        width: 44,
        height: 44,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Back
