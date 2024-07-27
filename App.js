import { Text, StyleSheet, View } from "react-native"
import React from "react";
import Data from "./Screens/New.js";
import Slider from "./Screens/Slider.js";
import Navigation from "./Config/Navigation.js";
import 'react-native-gesture-handler';

function App() {
  return (
    <>

      <View style={styles.main}>

        {/* <Data /> */}
        {/* <Slider/> */}
        <Navigation/>
      </View>




    </>

  )
}

const styles = StyleSheet.create({
  // mainText: {
  //   backgroundColor: "yellow",
  //   color: "blue",
  //   fontSize: 30
  // },
  main: {
    flex: 1,
    backgroundColor:"white"
  },
  main2: {
    flex: 4,

  },
  header: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    textAlign: "center"


  },
  body: {
    flex: 20,
    backgroundColor: "yellow"

  },
  footer: {
    flex: 1,
    backgroundColor: "red"

  },
  text: {
    color: "white"
  }
})

export default App