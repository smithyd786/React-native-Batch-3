import { Text, StyleSheet, View } from "react-native"
import React from "react";

function App() {
  return (
    <>
      {/* <Text style={{backgroundColor:"red",fontSize:30}}  >
        Reacty Native class 1werwer
      </Text>
      <Text style={styles.mainText} >
        Reacty Native class 1werwer
      </Text> */}
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.text}>Hello world</Text>
        </View>
        {/* <View style={styles.body}>
          <Text style={styles.text}> Body</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Footer</Text>
        </View>
      </View>
      <View style={styles.main2}>
        <View style={styles.header}>
          <Text style={styles.text}>header</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}> Body</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Footer</Text>
        </View> */}
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
    flex: 1
  },
  main2: {
    flex: 4,

  },
  header: {
    flex: 2,
    backgroundColor: "red",
      justifyContent:"center",
      textAlign:"center"
    

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