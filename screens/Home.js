import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import { PRIMARY_VARIENT_DARK_COLOR } from '../const/color.'
import { getData } from '../const/util'

export default function Home({ navigation }) {
    const [IsValidated, setIsValidated] = useState(false);

    const getStatus = async () => {
        const response = await getData("IsValidated");
        setIsValidated(response);
        if (!response) {
            navigation.navigate("SignIn");
        }
    };

    useEffect(() => {
        getStatus();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ flex: 1, backgroundColor: "#f7f5f5" }}>
                <View style={{ ...styles.ProfileWrapper, ...styles.shadowBox }}>
                    {/* <Image source={require("../assets/EPM.png")} style={{
                        height: 70, width: 70,
                        margin: 5
                    }}></Image>


                    <Text style={{ fontSize: 22, fontFamily: "Poppins-SemiBold", color: "#000" }}>Welcome</Text> */}

                    <Image source={require("../assets/EPM_Banner.png")}
                        resizeMode="contain"
                        style={{
                            height: 70,
                            width: "60%",
                        }}></Image>

                    <TouchableOpacity
                        style={{ marginTop: 20, flexDirection: "column", alignItems: "center" }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Entypo name="menu" size={32} color={PRIMARY_VARIENT_DARK_COLOR} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ProfileWrapper: {
        width: "100%",
        borderWidth: 0,
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        marginVertical: 0,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingBottom: 5,
        backgroundColor: "#fff"
    },
    headerStyle: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#35536B",
        marginTop: 20
    },
})