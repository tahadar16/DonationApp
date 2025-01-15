import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../components/common/Button";
import globalStyle from "../globalstyle";
import Title from "../components/common/Title";
import SafeScreen from "../components/common/SafeScreen";
import InputField from "../components/common/InputField";
import Spacer from "../components/common/Spacer";
import Back from "../components/common/Back";
import { createUser } from "../data/api/user";

const SignupScreen = ({navigation, route}) => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    return (
        <SafeScreen style = {globalStyle.lightfullScreen}>
            <Back ctaAction={()=> navigation.goBack()}/>
                <View style={style.container}>
                    <Title title={"Hello & Welcome!"} titleStyle={{marginVertical: 24}}/>
                    <InputField 
                        label={"Fullname"}
                        placeholder={"Enter your fullname"}
                        onTextChanged = {(value) => {
                            console.log(value)
                            setFullname(value)}}
                        />
                    <Spacer height={24}/>
                    <InputField 
                        label={"Email"}
                        placeholder={"Enter your email"}
                        type={"email-address"}
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
                    {success.length > 0 && <Text style={style.success}>{success}</Text>}
                    <AppButton 
                        enabled={
                            fullname.length >= 2 && email.length >= 5 && password.length >= 8
                          }
                        ctaText={"Register"} 
                        ctaAction = {async () => {
                            let user = await createUser(fullname, email, password)
                            if (user.error) {
                                setError(user.error);
                              } else {
                                setError('');
                                setSuccess('You have successfully registered');
                                setTimeout(() => navigation.goBack(), 3000);
                              }
                        }}/>
                    <Spacer height={13}/>
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
    success: {
        fontFamily: 'Inter',
        fontSize: 16,
        color: '#28a745',
        marginBottom: 24,
      },
    titleStyle: {
        marginVertical: 8,
    },
})

export default SignupScreen