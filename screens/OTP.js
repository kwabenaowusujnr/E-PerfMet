import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { BLACK_COLOR, PRIMARY_COLOR, PRIMARY_VARIENT_COLOR, PRIMARY_VARIENT_DARK_COLOR } from "../const/color.";
import { buttonTextFontSize, headerFontSize, normalFontSize, subHheaderFontSize } from "../const/values";
import OtpTextInput from "react-native-text-input-otp";
import { doSendOTP, doUserRegistration } from "../providers/ApiProvider";

export default function OTP({ route, navigation }) {
    const [resendTimer, setResendTimer] = useState(60);
    const {
        email,
        phoneNumber,
        userName,
        pSID,
        password
    } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState("");

    const sendOTP = async () => {
        setResendTimer(60);
        const req = await doSendOTP(phoneNumber);
    }

    useEffect(() => {
        sendOTP();
        console.log("useEffect");

        const interval = setInterval(() => {
            // Decrement timer every second
            setResendTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        // Clear interval when component unmounts or resendTimer reaches 0
        return () => clearInterval(interval);

    }, []);

    const formatTime = () => {
        if (resendTimer <= 0) {
            return '00:00'; // Return '00:00' when timer reaches or goes below 0
        }

        const minutes = Math.floor(resendTimer / 60);
        const seconds = resendTimer % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const registerUser = async () => {
        setIsLoading(true);
        try {

            const response = await doUserRegistration(email, password, phoneNumber, pSID, otp);

        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            {
                isLoading &&
                <ActivityIndicator
                    size={"large"}
                    color={PRIMARY_VARIENT_DARK_COLOR}
                    style={{
                        flex: 1,
                        marginTop: 10,
                        position: "absolute",
                        elevation: 0,
                        backgroundColor: "#fff",
                        opacity: 0.7,
                        width: "100%",
                        height: "100%",
                        zIndex: 10000
                    }}


                />
            }


            <View style={{ flex: 1, backgroundColor: "#fff" }}>

                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require("../assets/otp.png")}
                        style={{
                            height: 200,
                            width: "60%",
                            margin: 20,
                        }}></Image>
                </View>
                <View
                    style={styles.loginWrapperStyle}>
                    <View style={{ alignItems: "center", marginBottom: 20 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            color: PRIMARY_VARIENT_DARK_COLOR,
                            fontSize: subHheaderFontSize,
                            alignItems: "center"
                        }}>
                            Verification Code</Text>
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "grey",
                            fontSize: 16,
                            alignItems: "center",
                            textAlign: "center"
                        }}>
                            Please enter the verification code sent to your mobile number.</Text>

                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            color: BLACK_COLOR,
                            fontSize: 18,
                            alignItems: "center"
                        }}>{phoneNumber}</Text>
                    </View>

                    <OtpTextInput
                        otp={otp}
                        digits={6}
                        setOtp={setOtp}
                        fontStyle={{ fontFamily: "Poppins-SemiBold" }}
                        style={{ borderRadius: 0, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, height: 45 }}
                        focusedStyle={{ borderColor: "#5cb85c", borderBottomWidth: 2 }}
                    />
                    <Text style={{
                        fontFamily: "Poppins-Medium",
                        color: "grey",
                        fontSize: 14,
                        alignItems: "center",
                        textAlign: "center"
                    }}>
                        Resend OTP in {formatTime()}
                    </Text>
                    <TouchableOpacity
                        style={styles.loginButtonOutlinedStyle}
                        onPress={sendOTP} // Call resendOTP function onPress
                        disabled={resendTimer > 0} // Disable button if timer is still running
                    >
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "grey",
                            fontSize: buttonTextFontSize
                        }}>
                            Resend
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButtonStyle}
                        onPress={registerUser}
                    >
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "#fff",
                            fontSize: buttonTextFontSize
                        }}>
                            Verify & Create
                        </Text>
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
        height: 50,
        borderRadius: 10,
        marginVertical: 10

    },
    loginButtonOutlinedStyle: {
        borderColor: "grey",
        borderWidth: 1,
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        marginTop: 20
    },
    loginWrapperStyle: {
        padding: 20,
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: "#fff",
        paddingBottom: 80,
        margin: 10,
        gap: 10
    }
});
