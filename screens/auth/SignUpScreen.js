import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from '../../firebase'
const windowHeight = Dimensions.get('window').height;

function SignUpScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase.auth
  
  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }
        console.error(error);
      });
    
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#708090",
      }}>
      <View style={styles.view}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#D5D8DC"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={'none'} style={styles.input} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#D5D8DC"
          value={password}
          onChangeText={setPassword}
          autoCapitalize={'none'} style={styles.input}
          secureTextEntry={true} />
        <TouchableOpacity title="Sign up" onPress={() => (signUp(email, password))} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

      </View>
    </View>
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
    borderColor: "#FFFFFC",
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

export default SignUpScreen;