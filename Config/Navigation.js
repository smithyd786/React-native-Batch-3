import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from '../Screens/Slider'
import Data from "../Screens/New";
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Tab1 from "../Screens/Tab1";
import Tab2 from "../Screens/Tab2";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DrawerContent } from "../Screens/drawerContent";

const BottomNavbar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTitle: "Screen 1",
                        headerShown: false

                    }}
                    name="signup" component={Slider} />
                <Stack.Screen
                    options={{
                        headerTitle: "Main Screen",
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerLeft: () => (
                            <View>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={{ uri: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph" }}
                                />
                            </View>),
                        headerRight: () => (
                            <View>
                                <Text style={{ color: "white" }}>Logo</Text>
                            </View>)

                    }}
                    name="SCREEN 2" component={Data} />

                <Stack.Screen
                    options={{
                        headerTitle: "Bottom",
                        headerShown: false

                    }}
                    name="Drawer" component={DrawerTab} />


            </Stack.Navigator>

        </NavigationContainer>
    )
}

function BottomTab() {
    return (
        <BottomNavbar.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "white",
                // tabBarActiveBackgroundColor:"red",
                tabBarStyle: {
                    backgroundColor: '#1EFA03',
                    // margin:20,
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: 20,
                    borderTopWidth: 2,
                    borderTopColor: "red"


                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == "Home") {
                        iconName = focused ?
                            "home" :
                            "home-outline"


                    }
                    else if (route.name == "Settings") {
                        iconName = focused ?
                            "settings" :
                            "settings-outline"

                    }
                    return <Ionicons name={iconName} size={40} color={focused ? "red" : "green"} />
                }

            })}

        >
            <BottomNavbar.Screen name="Home" component={Data} />
            <BottomNavbar.Screen name="Settings" component={Tab2} />
        </BottomNavbar.Navigator>
    )

}

function DrawerTab() {
    return (
        <Drawer.Navigator initialRouteName="Drawer2" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Drawer2" component={Slider} />
            <Drawer.Screen name="Drawer1" component={BottomTab} />
        </Drawer.Navigator>
    )
}

export default Navigation