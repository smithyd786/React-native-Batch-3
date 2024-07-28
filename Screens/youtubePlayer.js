import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button, View, Alert ,TextInput, TouchableOpacity,Text,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubePlayerComp() {
  const [playing, setPlaying] = useState(false);
  const [inp,setinp] = useState("")

  const [videoList,setVideoList] = useState([]);
  useEffect(()=>{

    setVideoList([
        {
            "videoId":"iee2TATGMyI",
    
        },
        {
            "videoId":"W9hXsU_vh5k",
    
        },
        {
            "videoId":"rpa5900OpQ4",
    
        }
      ])

  },[])





  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  function addNeWLink(){
    // console.log()

    var list = [...videoList, {
        "videoId":inp,

    }]

    setVideoList(list)


  }

  return (
    <ScrollView>

        <TextInput
        value={inp}
     onChangeText={(e)=>setinp(e)}
        style={{backgroundColor:"white",borderWidth:1,borderColor:"red",borderStyle:"solid",margin:10}} />
        <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>addNeWLink()}>
        <Text style={styles.buttonText}>Add New Link</Text>
      </TouchableOpacity>
    </View>

  <View style={{marginTop:10}}>
        {
            videoList.map((v,i)=>{
                return (
                    <>
                      <YoutubePlayer
                      key={i}
                    height={200}
                    play={v.state ?  true:false}
                    videoId={v.videoId}
                    onChangeState={onStateChange}
                  />
                  <View style={{height:30}}>

                  </View>
               
                    </>
                  

                )
            })
        }

     
    </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'blue',
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
    buttonText: {
      color: 'white',
    },
  });