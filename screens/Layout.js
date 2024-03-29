import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./Index";
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { StatusBar } from "expo-status-bar";
import OTP from "./OTP";
import { getData } from "../const/util";

const Stack = createNativeStackNavigator();

export default function Layout(navigation) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }
                }>
                <Stack.Screen name="HomeScreen" component={Index} />

                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="OTP" component={OTP} />


            </Stack.Navigator>
            <StatusBar style="dark" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
