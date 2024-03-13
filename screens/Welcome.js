import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { OnboardingImages } from "../const/images";
import Swiper from "react-native-swiper";
import { PRIMARY_COLOR } from "../const/color.";

export default function Welcome() {

    const OnboardList = [
        { id: 1, title: "Attendance", desc: "Track your work hours and stay productive.", image: OnboardingImages.onBoard1 },
        { id: 2, title: "Tasks", desc: "Organize your to-dos and accomplish your goals.", image: OnboardingImages.onBoard2 },
        { id: 3, title: "Incidents & Accidents", desc: "Report and manage incidents and accidents seamlessly.", image: OnboardingImages.onBoard3 },
    ];
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Swiper
                paginationStyle={{
                    position: "absolute",
                    bottom: 15
                }}
                activeDotColor={PRIMARY_COLOR}
                activeDotStyle={{ width: 20, height: 8 }}
            >
                {OnboardList.map((e) => {
                    return (
                        <View
                            key={e.id}
                            style={{ justifyContent: "flex-start", alignItems: "center", height: "100%" }}
                        >
                            <Image source={e.image} style={styles.imageContainer}></Image>
                            <Text style={styles.textStyle}>{e.title}</Text>
                            <Text style={styles.texDescStyle}>{e.desc}</Text>

                        </View>
                    )
                })

                }
            </Swiper>
            <View style={{
                position: "absolute",
                bottom: "5%",
                left: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TouchableOpacity style={styles.buttomStyle}>
                    <Text style={styles.textGetStartedStyle}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "grey", fontSize: 16 }}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 25,
        fontFamily: "Poppins-Bold",
        width: "40%",
        textAlign: "center"
    },
    texDescStyle: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        width: "90%",
        textAlign: "center"
    },
    imageContainer: {
        height: "60%",
        width: "90%",
        resizeMode: "contain",
        marginHorizontal: 15
    },
    buttomStyle: {
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    textGetStartedStyle: {
        fontFamily: "Poppins-SemiBold",
    }

});
