import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = ({
  route
}) => {
  const {
    TestingParam = 12345
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>     
          <View style={styles.row1}></View>
          <View style={styles.row2}><Text style={styles.NYeerlOa}>Lorem ipsum…</Text></View>
          <View style={styles.row3}></View>  
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 1,
    borderRadius: 51
  },
  row3: {
    flex: 1
  },
  NYeerlOa: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled9;