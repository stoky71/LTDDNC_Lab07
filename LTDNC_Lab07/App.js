import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Bai1() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeShow = () =>{
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 0,
      useNativeDriver:true
    }).start()
  }
  const fadeback = () =>{
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 0,
      useNativeDriver:true
    }).start()
  }
  const yValue = fadeAnim.interpolate({
    inputRange:[0,1],
    outputRange:[0,450]
  })
  const XValue = fadeAnim.interpolate({
    inputRange:[0,1],
    outputRange:[0,450]
  })
  
  const animationFade = {
    transform:[
      {translateY: yValue}
    ]
  }
  
  return (
    <View style={styles.container}>
      <Animated.View style={[{opacity:fadeAnim},animationFade]}>
        <Text style={{backgroundColor:'blue', fontSize:25, fontWeight:'800'}}>H3.1</Text>
        <StatusBar style="auto" />
      </Animated.View>
      <TouchableOpacity onPress={fadeShow} style={{margin:20, backgroundColor:'gray',fontSize:20}}>
        <Text style={{margin:20, backgroundColor:'gray',fontSize:20}}>Move</Text></TouchableOpacity> 
      <TouchableOpacity onPress={fadeback} style={{margin:20, backgroundColor:'gray',fontSize:20}}>
        <Text style={{margin:20, backgroundColor:'gray',fontSize:20}}>Reset</Text></TouchableOpacity>
    </View>
  );
}

export default Bai1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
