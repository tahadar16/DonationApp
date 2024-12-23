import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Spacer from "../common/Spacer";
import { Platform } from "react-native";

const SearchBar = props => {

    const [searchQuery, setSearchQuery] = useState("")

    return (
        <View style={style.container}>
            <FontAwesomeIcon icon={faSearch} size={20} color={Colors.Crayola}/>
            <Spacer width={4}/>
            <TextInput 
                style = {style.inputText}
                inputMode = {"search"} 
                placeholder = {props.placeholder} 
                numberOfLines={1} 
                value={searchQuery}
                onChangeText={(value) => { 
                    setSearchQuery(value)
                    props.onSearch(value)
                    }
                }
                 />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection : "row",
        backgroundColor: Colors.Cultured,
        borderRadius: 15,
        paddingHorizontal: 16,
        paddingVertical: Platform.OS === "ios" ? 14 : 10, 
        alignItems: "center"
    },
    inputText: {
        fontFamily: "inter_regular",
        fontSize: 14,
        flex: 1
    }
})

export default SearchBar