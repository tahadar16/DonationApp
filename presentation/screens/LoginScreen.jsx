import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/common/Button";
import globalStyle from "../globalstyle";
import Title from "../components/common/Title";
import SafeScreen from "../components/common/SafeScreen";
import { Colors } from "../Colors";
import InputField from "../components/common/InputField";
import Spacer from "../components/common/Spacer";
import { Route } from "../../navigation/Routes";
import { loginUser } from "../data/api/user";
import { userLoggedIn } from "../../redux/reducers/UserSlice";
import { useDispatch } from "react-redux";

const LoginScreen = ({navigation, route}) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    const dispatch = useDispatch()

    return (
        <SafeScreen style = {globalStyle.lightfullScreen}>
                <View style={style.container}>
                    <Title title={"Welcome Back"} titleStyle={{marginVertical: 24}}/>
                    <InputField 
                        label={"Email"}
                        placeholder={"Enter your email"}
                        keywboardType={"email-address"}
                        onTextChanged = {(value) => {
                            console.log(value)
                            setEmail(value)}}
                        />
                    <Spacer height={24}/>
                    <InputField
                        label={"Password"}
                        placeholder={"Enter your password"} 
                        secureTextEntry = {true}
                        onTextChanged = {(value) => setPassword(value)}/>
                    <Spacer height={24}/>
                    {error.length > 0 && <Text style={style.error}>{error}</Text>}
                    <AppButton 
                        ctaText={"Login"}
                        ctaAction = { async ()=> {
                            let user = await loginUser(email, password);
                            if (!user.status) {
                            setError(user.error);
                            } else {
                            setError('');
                            dispatch(userLoggedIn(user.data))
                            navigation.navigate(Route.Home);
                            }
                        }}
                      enabled={email.length > 5 && password.length > 7}
                         />
                    <Spacer height={13}/>
                    <Pressable onPress={()=> navigation.navigate(Route.Signup)}>
                        <Title 
                            title={"Don't have an account?"} 
                            titleStyle={{
                                marginVertical: 24,
                                color: Colors.Crayola,
                                fontSize: 16,
                                textAlign: "center"}}/>
                    </Pressable>
                </View>
        </SafeScreen>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    
    },
    description: {
        marginBottom: 8,
        fontFamily: "inter-regular",
        fontSize: 14
    },
    error: {
        fontFamily: 'Inter',
        fontSize: 16,
        color: '#FF0000',
        marginBottom: 24,
      },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 5
    },
    imageContainer: {
        height: 240,
        width: "100%",
        marginVertical: 12
    },
    titleStyle: {
        marginVertical: 8,
    }

})

export default LoginScreen