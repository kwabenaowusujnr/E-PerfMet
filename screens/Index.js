import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AppBaseProvider } from "../providers/AppBaseContext";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Contact from "./Contact";
import Message from "./Message";
import Notification from "./Notification";
import More from "./More";
import { PRIMARY_VARIENT_DARK_COLOR } from "../const/color.";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import OTP from "./OTP";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppMenu() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: PRIMARY_VARIENT_DARK_COLOR,
                tabBarStyle: {
                    borderRadius: 0,
                    backgroundColor: "#ffffff",
                    position: 'absolute',
                    overflow: 'hidden',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    padding: 8
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    tabBarLabel: 'Contact',
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <AntDesign name="contacts" color={color} size={size} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarLabel: 'Message',
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="message" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="notification" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: 'More',
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="more-vertical" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function LeftPanelDrawerContent({ navigation }) {
    return (
        <DrawerContentScrollView style={{ flex: 1 }}>

            <DrawerItem
                label={"Profile"}
                icon={({ focused, color, size }) =>
                    <FontAwesome5 name="user" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Attendance"}
                icon={({ focused, color, size }) =>
                    <AntDesign name="clockcircle" size={24} color="black" />
                }
            />
            <DrawerItem
                label={"Tasks"}
                icon={({ focused, color, size }) =>
                    <FontAwesome5 name="tasks" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Location"}
                icon={({ focused, color, size }) =>
                    <Entypo name="location" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"My Files"}
                icon={({ focused, color, size }) =>
                    <FontAwesome name="files-o" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Calender"}
                icon={({ focused, color, size }) =>
                    <AntDesign name="calendar" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Health & Fitness"}
                icon={({ focused, color, size }) =>
                    <Ionicons name="fitness" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Incidents & Accidents"}
                icon={({ focused, color, size }) =>
                    <MaterialIcons name="pending-actions" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Events & Trainings"}
                icon={({ focused, color, size }) =>
                    <MaterialCommunityIcons name="google-classroom" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Settings & Support"}
                icon={({ focused, color, size }) =>
                    <MaterialIcons name="contact-support" size={size} color={color} />
                }
            />
            <DrawerItem
                label={"Logout"}
                icon={({ focused, color, size }) =>
                    <MaterialIcons name="logout" size={size} color={color} />
                }
                onPress={() => { navigation.navigate("SignIn") }}
            />

        </DrawerContentScrollView>
    )
}

export default function Index() {
    return (
        <AppBaseProvider>
            <NavigationContainer independent={true}>
                <Drawer.Navigator
                    drawerContent={(props) => <LeftPanelDrawerContent {...props} />}
                    screenOptions={
                        { headerShown: false }
                    }
                >
                    <Drawer.Screen name="MainMenu" component={AppMenu} />
                    <Drawer.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="OTP" component={OTP} />
                </Drawer.Navigator>
            </NavigationContainer>
        </AppBaseProvider >
    );
}

const styles = StyleSheet.create({});
