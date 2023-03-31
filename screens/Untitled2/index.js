import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><ImageBackground style={styles.QsUnWRFx} source={require("./dragon 6.jpg")} resizeMode="cover"></ImageBackground></Pressable><Text style={styles.DAEpWcpz}>Lorem ipsum…</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QsUnWRFx: {
    width: 195,
    height: 151,
    position: "absolute",
    left: 76,
    top: 107
  },
  DAEpWcpz: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;