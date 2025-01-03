import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Tag from "../common/Tag";
import Title from "../common/Title";
import { Colors } from "../../Colors";

const DonationItem = props => {
    return (
        <View style = {style.container}>
                <Image source={{uri : props.imageUrl}} style={style.image}/>
            <View style={style.tagContainer}>
                <Tag title= {props.tag} />
            </View>
            <View style = {style.infoContainer}>
                <Title title={props.title} titleStyle={style.title} numberOfLines={1}/>
                <Title title={"$ " + props.price} titleStyle = {style.price}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: { 
        marginTop: 20,
        maxWidth: 155
    },
    image: {
        height: 170,
        width: 155,
        resizeMode: "cover",
        borderRadius: 20
    
    },
    infoContainer: {
        paddingTop: 16,
        paddingBottom: 3
    },
    tagContainer: {
        position: "absolute",
        top: 10,
        start: 10,
        zIndex: 1
    },
    title: {
        fontSize: 16
    },
    price: {
        fontSize: 16,
        color: Colors.Crayola
    }
})

export default DonationItem