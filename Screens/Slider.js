import React, { useEffect, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, Button } from 'react-native'
// import { Button } from "react-native-paper"
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get("window")

const images = [
    "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph",
    "https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph",
    "https://img.freepik.com/free-photo/european-union-agency-operator-using-military-tech-green-screen-tablet_482257-89748.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph"
]
function Slider({ navigation }) {
    return (
        <View style={{
            flex: 1
        }}>
            <View
                style={{ flex: 1 }}
            >


                <Swiper
                    height={240}
                    dot={
                        <View style={{
                            backgroundColor: "grey",
                            width: 15,
                            height: 15,
                            borderRadius: 10,
                            margin: 3
                        }}>
                        </View>
                    }
                    activeDot={
                        <View style={{
                            backgroundColor: "red",
                            width: 15,
                            height: 15,
                            borderRadius: 10,
                            // margin: 3
                        }}>

                        </View>
                    }
                    autoplay={true}
                    autoplayTimeout={5}
                >
                    {
                        images.map((v, i) => {
                            return <Image key={i}
                                source={{ uri: v }}
                                style={{
                                    width: width,
                                    flex: 1
                                }}
                            ></Image>
                        })
                    }
                </Swiper>
                <View
                    style={{ flex: 2 }}
                >

                    <Button title="Open Screen" onPress={() => {
                        navigation.navigate("Bottom",{
                            "name":"new",
                            "age":20
                        })
                    }}></Button>

                </View>
            </View>


        </View>

    )
}
export default Slider;