import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { BLACK_COLOR, PRIMARY_COLOR, PRIMARY_VARIENT_COLOR, PRIMARY_VARIENT_DARK_COLOR } from "../const/color.";
import { headerFontSize, normalFontSize } from "../const/values";
import { storeData } from "../const/util";

export default function SignIn({ navigation }) {
    const [isPasaswordShow, setIsPasswordShow] = useState(false)

    const handleLogin = () => {
        storeData(true, "IsValidated");
        navigation.navigate("MainMenu");
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ flex: 1, backgroundColor: "#fff" }}>

                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require("../assets/EPM.png")}
                        style={{
                            height: 200,
                            width: 200,
                            margin: 20,
                        }}></Image>
                </View>
                <View
                    style={styles.loginWrapperStyle}>
                    <View style={{ alignItems: "center", marginBottom: 20 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            color: PRIMARY_VARIENT_DARK_COLOR,
                            fontSize: headerFontSize,
                            alignItems: "center"
                        }}>
                            Welcome Back</Text>
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "grey",
                            fontSize: 14,
                            alignItems: "center"
                        }}>
                            Login to your account</Text>
                    </View>
                    <View style={{ marginTop: 10, ...styles.textFieldWrapper }}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Email Address/Username"
                            placeholderTextColor={"grey"}
                            fontSize={16}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.textFieldWrapper}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Password"
                            fontSize={16}
                            placeholderTextColor={"grey"}
                            secureTextEntry={isPasaswordShow}
                        />
                        <TouchableOpacity
                            style={{ position: "absolute", right: 12 }}
                            onPress={() => setIsPasswordShow(!isPasaswordShow)}
                        >
                            {
                                isPasaswordShow ?
                                    <Ionicons name="eye-off" size={24} color={PRIMARY_VARIENT_DARK_COLOR}></Ionicons>
                                    :
                                    <Ionicons name="eye" size={24} color={PRIMARY_VARIENT_DARK_COLOR}></Ionicons>
                            }

                        </TouchableOpacity>
                    </View>
                    <Pressable>
                        <Text style={{
                            textAlign: "right",
                            fontFamily: "Poppins-SemiBold",
                            marginLeft: 10,
                            color: PRIMARY_VARIENT_DARK_COLOR
                        }}>
                            Forgot Password?
                        </Text></Pressable>

                    <TouchableOpacity
                        style={styles.loginButtonStyle}
                        onPress={handleLogin}
                    >
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            color: "#fff",
                            fontSize: 18
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity >
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        marginVertical: 20
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: BLACK_COLOR,
                            fontFamily: "Poppins-Medium"
                        }}>
                            Do`nt have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate("SignUp")}>
                            <Text style={{
                                textAlign: "center",
                                fontFamily: "Poppins-Bold",
                                color: PRIMARY_VARIENT_DARK_COLOR,
                                marginLeft: 10,
                                fontSize: normalFontSize
                            }}>
                                Register Now
                            </Text></Pressable>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textFieldWrapper: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginVertical: 10
    },
    textField: {
        width: "100%",
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    loginButtonStyle: {
        backgroundColor: PRIMARY_VARIENT_DARK_COLOR,
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center',
        height: 60,
        borderRadius: 15,
        marginVertical: 20

    },
    loginWrapperStyle: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: "#FCFCFC",
        borderColor: "#F3F3F3",
        paddingBottom: 80,
        margin: 10
    }
});
