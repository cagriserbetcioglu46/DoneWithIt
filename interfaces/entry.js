import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ContentArea() {
  return (
    <View style={styles.FullArea}>
      <View style={styles.ContentArea}>
        <Image source={require('../images/usermenu(2)_350x195.jpg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ContentArea: {
    alignItems:"center",
    flex: 1,
    justifyContent: "center",
  },
  FullArea: {
    backgroundColor: "#FCE9D8",
    alignItems: "center",
    flex: 1,
  },
  
})
