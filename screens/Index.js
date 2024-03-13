import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppMenu() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#22534F",
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
                name="Events"
                component={Events}
                options={{
                    tabBarLabel: 'Events',
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <Entypo name="calendar" color={color} size={size} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Gallery"
                component={Gallery}
                options={{
                    tabBarLabel: 'Media',
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="albums" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Visit"
                component={Visit}
                options={{
                    tabBarLabel: 'Visit',
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Index() {
    return (
        <View>
            <Text>Index</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
