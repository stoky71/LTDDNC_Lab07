import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Bai1va2va3() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeShow = () =>{
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver:true
    }).start()
  }
  const fadeback = () =>{
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver:true
    }).start()
  }
  
  const fadestop = () => {
    Animated.timing(fadeAnim, {}).stop()
  }

  const yValue = fadeAnim.interpolate({
    inputRange:[0,1],
    outputRange:[0,450]
  })
  const XValue = fadeAnim.interpolate({
    inputRange:[0,1],
    outputRange:[1,300]
  })
  
  const animationFade = {
    transform:[
      {translateX: XValue}
    ]
  }
  
  return (
    <View style={styles.container}>
      <Animated.View style={[{borderWidth:1, borderRadius:40,marginTop:100, marginLeft:-300},animationFade]}>
        <Text style={{backgroundColor:'blue', fontSize:25, fontWeight:'800'}}>H3.1</Text>
      </Animated.View>
      <TouchableOpacity onPress={fadeShow} style={{margin:20, backgroundColor:'gray',fontSize:20}}>
        <Text style={{margin:20, backgroundColor:'gray',fontSize:20}}>Move</Text></TouchableOpacity> 
      <TouchableOpacity onPress={fadestop} style={{margin:20, backgroundColor:'gray',fontSize:20}}>
        <Text style={{margin:20, backgroundColor:'gray',fontSize:20}}>Stop</Text></TouchableOpacity> 
      <TouchableOpacity onPress={fadeback} style={{margin:20, backgroundColor:'gray',fontSize:20}}>
        <Text style={{margin:20, backgroundColor:'gray',fontSize:20}}>Reset</Text></TouchableOpacity>
    </View>
  );
}

function bai5(){
  const [hiden1, setHiden1] = useState(false)
  const [hiden2, setHiden2] = useState(true)
  const [hiden3, setHiden3] = useState(true)
  
  const fadeAnim1 = useRef(new Animated.Value(0)).current
  const fadeAnim2 = useRef(new Animated.Value(0)).current
  const fadeAnim3 = useRef(new Animated.Value(0)).current
  
  const handleSequence = () =>{
      Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration:3000,
        useNativeDriver: true
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration:3000,
        useNativeDriver: true
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration:4000,
        useNativeDriver: true
      }),
      Animated.delay(1000),
    ]).start()
  }
 
  setTimeout(() =>{
    setHiden1(true)
    setHiden2(false)
  }, 1000)
  setTimeout(() =>{
    setHiden2(true)
    setHiden3(false)
  }, 3000)
  const xVal1 = fadeAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 100],
  });
  const animStyle1 = {
    transform: [{ translateX: xVal1 }],
  };
  const xVal2 = fadeAnim2.interpolate({
    inputRange: [1, 2],
    outputRange: [150, 200],
  });
  const animStyle2 = {
    transform: [{ translateY: xVal2 }],
  };
  const xVal3 = fadeAnim3.interpolate({
    inputRange: [2, 3],
    outputRange: [100, 300],
  });
  const animStyle3 = {
    transform: [{ translateY: xVal3 }],
  };
  return(
    <View style={styles.container}>
      {hiden1 ? null : (
        <Animated.View 
          style={[{borderWidth:1, borderRadius:40,marginTop:100, marginLeft:-300,backgroundColor:'blue'},animStyle1]}>
            <Text style={{backgroundColor:'blue', fontSize:25, fontWeight:'800'}}>H3</Text>
        </Animated.View>
      )}
      {hiden2 ? null : (
        <Animated.View 
          style={[{borderWidth:1, borderRadius:40,marginTop:100, marginLeft:-300,backgroundColor:'gray'},animStyle2]}>
            <Text style={{backgroundColor:'red', fontSize:25, fontWeight:'800'}}>H3.1</Text>
        </Animated.View>
      )}
      {hiden3 ? null : (
        <Animated.View 
          style={[{borderWidth:1, borderRadius:40,marginTop:100, marginLeft:-300,backgroundColor:'yellow'},animStyle3]}>
            <Text style={{backgroundColor:'yellow', fontSize:25, fontWeight:'800'}}>H3.2</Text>
        </Animated.View>
      )}
      <TouchableOpacity onPress={handleSequence} style={{margin:20, backgroundColor:'gray',fontSize:20}}>
        <Text style={{margin:20, backgroundColor:'gray',fontSize:20}}>Move</Text></TouchableOpacity> 
      
    </View>
  )
}


export default bai5



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
