import { View, Text, Image, ScrollView, TextInput, StyleSheet,Button } from "react-native"
import React, { useState } from "react"
function Home() {
    const { inp } = style
    const [name, setname] = useState()
    const ShowData=()=>{
        console.log(name)
    }
    return (
        <ScrollView>
            <View>
                <TextInput
                    style={inp}
                   value={name}
                   onChangeText={(e)=>setname(e)}
                    placeholder="enter  Number "
                />

                <Button title={"SUBMIT"} onPress={()=>ShowData()}></Button>

                <Text style={{ backgroundColor: "red", fontSize: 30, color: "white", textAlign: "center" }}>Home Page</Text>
                <Image
                    style={{ height: 400, width: 400 }}
                    source={{ uri: "https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.1.1881161492.1714914526&semt=ais_user" }} />

                <Image
                    source={require("../assets/1.jpg")}
                    style={{ height: 400, width: 400 }}
                />
            </View>

        </ScrollView>

    )
}
export default Home

const style = StyleSheet.create({
    inp: {
        margin: 10,
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "red",
        borderStyle: "dotted",
        color: "black"
    }
})