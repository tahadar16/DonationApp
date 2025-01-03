import React from "react";
import { View } from "react-native";
import globalStyle from "../globalstyle";
import Title from "../components/common/Title";
import AppButton from "../components/common/Button";
import Tab from "../components/common/Tab";
import Tag from "../components/common/Tag";
import SearchBar from "../components/search/SearchBar";

const HomeScreen = ()=> {
    return (
        <View style = {globalStyle.lightfullScreen}>
            <Title title={"This is HomeScreen"}/>
            <AppButton ctaText={"Donate"} ctaAction={()=> {}} />
            <Tab ctaText={"Lifestyle"} ctaAction={()=> {}} />
            <Tab ctaText={"Lifestyle"} ctaAction={()=> {}} selected = {true} />
            <Tag title={"Environment"}/>
            <SearchBar placeholder = {"Search"} onSearch = {(searchValue)=> {console.log(searchValue)}}/>
        </View>
    )
}

export default HomeScreen;