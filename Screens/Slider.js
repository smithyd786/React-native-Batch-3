import React, { useEffect, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, Button } from 'react-native'
// import { Button } from "react-native-paper"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {Avatar} from "react-native-paper";
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get("window")


const images = [
    "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph",
    "https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph",
    "https://img.freepik.com/free-photo/european-union-agency-operator-using-military-tech-green-screen-tablet_482257-89748.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph"
]



function Slider({ navigation }) {
    var [file,setfile] = useState("")


    const openImageGallery = () => {
        console.log("ajshdjash")
    

        const options = {
            mediaType: 'photo',  // You can use 'photo' or 'video'
            quality: 0.8,       // Image quality (0 to 1)
        };
    
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled the gallery.');
            }
            else if (response.error) {
                console.log('Camera Error: ', response.error);
            }
            else {
                // Use the image from the camera here
                console.log('Image URI: ', response.assets[0].uri);
                setfile(response.assets[0].uri)
                // setshowprogress(true)
                // imageupload(response.assets[0].uri)
    
            }
    
        })
    
    
    }

    const openCamera = () => {
        const options = {
            mediaType: 'photo',  // You can use 'photo' or 'video'
            quality: 0.8,       // Image quality (0 to 1)
        };


        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled the camera.');
            }
            else if (response.error) {
                console.log('Camera Error: ', response.error);
            }
            else {
                // Use the image from the camera here
                console.log('Image URI: ', response.assets[0].uri);
                setfile(response.assets[0].uri)
                // imageupload(response.assets[0].uri)

            }

        })
    }

    return (
        <ScrollView>
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
                        navigation.navigate("Drawer", {
                            "name": "new",
                            "age": 20
                        })
                    }}></Button>

                    {file!=""?
                                 <Avatar.Image size={100} source={{uri:file}} />

                  :<></>}

                    <Button title="Open Gallery" onPress={() => {
                        openImageGallery()
                    }}></Button>
                     <Button title="Open cAMERA" onPress={() => {
                        openCamera()
                    }}></Button>
                </View>
            </View>


        </View>
        </ScrollView>

    )
}
export default Slider;