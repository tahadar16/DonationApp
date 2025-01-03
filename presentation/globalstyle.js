import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Platform } from "react-native";

const globalStyle = StyleSheet.create({
    fullScreenContainer: {
        flex:1,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === "ios" ? 0 : 20,
        paddingBottom: 20,
    },
    lightfullScreen: {
        flex: 1,
        backgroundColor: Colors.White
    }
})

export default globalStyle