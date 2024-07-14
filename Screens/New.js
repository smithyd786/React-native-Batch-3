import React, { useEffect, useState } from "react"
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import axios from "axios"
import { ActivityIndicator, MD2Colors, Avatar, Card, Button, Checkbox, } from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
function Data({ route,navigation }) {
    // console.log(route.params.name)

    let [storedata, setstoredata] = useState([])
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res["data"][0])
            setstoredata(res["data"])
        })
            .catch((e) => {
                console.log(e)
            })

    }, [])

    //ui data 
    //     const itemRender = ((item)=>{
    //         console.log(item["item"]["image"])
    //         return(
    //             <View style={{
    //                 margin:10,
    //                 padding:10,
    //                 borderWidth: 1,
    //                 borderColor: "red",
    //                 borderStyle: "dotted",
    //                 alignItems:"center"

    //             }}>

    // <Avatar.Image size={300}  source={{uri:item["item"]["image"]}}/>
    //                 {/* <Image 
    //                 style={{height:300,width:300}}
    //                 source={{uri:item["item"]["image"]}} /> */}

    //                 <Text>Description : {item["item"]["description"]}</Text>
    //                 <Text style={{fontWeight:"bold"}}>Price : {item["item"]["price"]}</Text>

    //             </View>

    //         )
    //     })

    //react native paper

    const itemRender = ((item) => {
        return (
            <Card>
                <Card.Content>
                    <Card.Cover source={{ uri: item["item"]["image"] }} />
                    <Text variant="titleLarge">{item["item"]["title"]}</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Actions>
                    <AntIcon name="home" size={30} color="#900" />
                    <Button>Buy</Button>
                    <MaterialIcons name="quick-contacts-mail" size={40} color={"red"} />
                    <MaterialIcons name="perm-contact-calendar" size={40} color={"red"} />
                </Card.Actions>
            </Card>
        )

    })



    return (
        <ScrollView>
            <View>
                <Text>Api Calling</Text>
                <Avatar.Image size={400} source={{ uri: "https://img.freepik.com/free-vector/vector-ripe-yellow-orange-red-whole-sliced-mango-cubes-with-leaf-isolated-white-background_1284-45465.jpg?uid=R72210616&ga=GA1.2.1859093203.1717504417&semt=sph" }} />

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate("Bottom")}>
                    <Avatar.Text size={40} label="home" style={{ width: 200 }} />

                </TouchableOpacity>

                <ActivityIndicator size={20} color={MD2Colors.green800} />
                <FlatList
                    data={storedata}
                    renderItem={(item) => itemRender(item)}

                />



                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />

            </View>
        </ScrollView>

    )

}
export default Data