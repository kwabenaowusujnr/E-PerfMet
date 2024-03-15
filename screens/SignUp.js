import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { BLACK_COLOR, PRIMARY_COLOR, PRIMARY_VARIENT_COLOR, PRIMARY_VARIENT_DARK_COLOR } from "../const/color.";
import { headerFontSize, normalFontSize } from "../const/values";

export default function SignUp({ navigation }) {
    const [isPasaswordShow, setIsPasswordShow] = useState(false)
    const [isConfirmPasaswordShow, setIsConfirmPasswordShow] = useState(true)

    const handleLogin = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ backgroundColor: "#fff" }}>


                <View
                    style={styles.loginWrapperStyle}>
                    <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            color: PRIMARY_VARIENT_DARK_COLOR,
                            fontSize: headerFontSize,
                        }}>
                            Register </Text>
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "grey",
                            fontSize: 14,
                        }}>
                            Enter details below</Text>
                    </View>
                    <View style={{ marginTop: 10, ...styles.textFieldWrapper }}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Email Address"
                            placeholderTextColor={"grey"}
                            fontSize={16}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={{ marginTop: 10, ...styles.textFieldWrapper }}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Phone Number"
                            placeholderTextColor={"grey"}
                            fontSize={16}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={{ marginTop: 10, ...styles.textFieldWrapper }}>
                        <TextInput
                            style={styles.textField}
                            placeholder="User Name"
                            placeholderTextColor={"grey"}
                            fontSize={16}
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={{ marginTop: 10, ...styles.textFieldWrapper }}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Public Service ID"
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

                    <View style={styles.textFieldWrapper}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Confirm Password"
                            secureTextEntry={isConfirmPasaswordShow}
                            placeholderTextColor={"grey"} />
                        <TouchableOpacity
                            style={{ position: "absolute", right: 12 }}
                            onPress={() => setIsConfirmPasswordShow(!isConfirmPasaswordShow)}>
                            {
                                isConfirmPasaswordShow ?
                                    <Ionicons name="eye-off" size={24} color={PRIMARY_VARIENT_DARK_COLOR}></Ionicons>
                                    :
                                    <Ionicons name="eye" size={24} color={PRIMARY_VARIENT_DARK_COLOR}></Ionicons>
                            }
                        </TouchableOpacity>

                    </View>



                    <TouchableOpacity
                        style={styles.loginButtonStyle}
                        onPress={() => { navigation.navigate("OTP") }}
                    >
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            color: "#fff",
                            fontSize: 18,
                        }}>
                            Continue


                        </Text>
                        <FontAwesome5 name="chevron-right" size={24} color={"#fff"}></FontAwesome5>
                    </TouchableOpacity >
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                        marginVertical: 20
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: BLACK_COLOR,
                            fontFamily: "Poppins-Medium"
                        }}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate("SignIn")}>
                            <Text style={{
                                textAlign: "center",
                                fontFamily: "Poppins-Bold",
                                color: PRIMARY_VARIENT_DARK_COLOR,
                                marginLeft: 10,
                                fontSize: normalFontSize
                            }}>
                                Log In
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
        marginVertical: 20,
        flexDirection: "row",
        gap: 5
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
