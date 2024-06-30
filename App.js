import { Text, StyleSheet, View } from "react-native"
import React from "react";
import Home from "./Screens/Home";

function App() {
  return (
    <>

      <View style={styles.main}>

        <Home />
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