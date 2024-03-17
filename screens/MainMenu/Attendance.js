import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Greetings from '../../components/Greetings'
import TimeDateScreen from '../../components/TimeDateScreen'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { PRIMARY_COLOR, PRIMARY_VARIENT_DARK_COLOR } from '../../const/color.'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Attendance() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <ScrollView style={{ backgroundColor: "" }}>
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    <ImageBackground
                        source={require("../../assets/attendanceBg.png")}
                        style={{
                            padding: 20,
                            paddingBottom: 50
                        }}>
                        <Greetings />
                        <TimeDateScreen />
                    </ImageBackground>
                    <View style={styles.clockEngineContainerStyle}>
                        <TouchableOpacity delayPressIn={5}>
                            <LinearGradient
                                colors={['#1F9CD6', '#067FC4', '#045FA6']}
                                style={{
                                    width: 120,
                                    height: 120,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 60,
                                    gap: 5
                                }}>
                                <Entypo name="login" size={42} color="white" />
                                <Text style={{ color: "#fff", fontFamily: "Poppins-Medium" }}>Clock-In</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <Text style={{ color: "grey", gap: 5 }}>
                            <Entypo name="location" size={20} color="grey" />
                            My Current Loation
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: "100%" }}>
                            <View style={styles.clockDetails}>
                                <MaterialCommunityIcons name="clock-in" size={36} color={PRIMARY_VARIENT_DARK_COLOR} />
                                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}>
                                    09:20
                                </Text>
                                <Text>
                                    Clock-In
                                </Text>
                            </View>
                            <View style={styles.clockDetails}>
                                <MaterialCommunityIcons name="clock-out" size={36} color={PRIMARY_VARIENT_DARK_COLOR} />
                                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}>
                                    --:--
                                </Text>
                                <Text>
                                    Clock-Out
                                </Text>
                            </View>
                            <View style={styles.clockDetails}>
                                <MaterialCommunityIcons name="clock-out" size={36} color={PRIMARY_VARIENT_DARK_COLOR} />
                                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}>
                                    1hr 45m
                                </Text>
                                <Text>
                                    Total Hours
                                </Text>
                            </View>


                        </View>


                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    clockEngineContainerStyle: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20
    },
    clockDetails: {
        alignItems: 'center',
        gap: 5
    }
})