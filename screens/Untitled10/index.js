import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.oyOcRPPt} source={require("./dragon 6.jpg")} resizeMode="cover"></ImageBackground><Text style={styles.nIIglNjF}>Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World Testing World </Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  oyOcRPPt: {
    width: 284,
    height: 234,
    position: "absolute",
    left: 34,
    top: 287
  },
  nIIglNjF: {
    width: 335,
    height: 183,
    lineHeight: 29,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    flexDirection: "row",
    flex: 1,
    letterSpacing: 0,
    position: "absolute",
    left: 10,
    top: 10,
    fontFamily: "Merriweather"
  }
});
export default Untitled10;