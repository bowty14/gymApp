import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions  } from 'react-native';
import firebase from '../firebase'
const windowHeight = Dimensions.get('window').height;

function LandingPage() {
  const auth = firebase.auth
  return (
    <>
      <View style={styles.view}>
      <Text style={styles.input}>Welcome!</Text>
      <TouchableOpacity title="Sign out" onPress={() => (auth().signOut().then(() => console.log('User signed out!')))} style={styles.button}>
        <Text style={styles.buttonText}>Signout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: "20%",
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%",
    height: windowHeight,
  },
  input: {
    backgroundColor: "#566573",
    height: "5%",
    borderWidth: 2,
    margin: "3%",
    width: "65%",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFC",
    fontSize: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    marginTop: "6%",
    padding: "3%",
    width: "65%",
    borderWidth: 3,
    borderColor: "#FFFFFC",
    borderRadius: 15
  },
  buttonText: {
    color: "#FFFFFC",
    fontSize: 18
  },
})

export default LandingPage;