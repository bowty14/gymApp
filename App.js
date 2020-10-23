// import 'react-native-gesture-handler';
import React, { useState, useMemo, createContext } from 'react';
// import { SplashScreen } from 'expo';
import firebase from './firebase';
import AuthStack from './navigation/stacks/AuthStack'
import LandingPage from './screens/LandingPage';




// console.disableYellowBox = true;

// SplashScreen.preventAutoHide();
// setTimeout(SplashScreen.hide, 3500);

export const AuthContext = createContext()

export default () => {

  const auth = firebase.auth();
  let [ loggedIn, setLoggedIn ] = useState(false);
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  
  const authContext = useMemo(() => {
  return {
    updateUser: () => {
      const user = firebase.auth().currentUser;
      setLoggedIn(true);
    }
  };
}, []);


const user = firebase.auth().currentUser;
return (
   
  <AuthContext.Provider value={authContext}>
    {loggedIn && <LandingPage/>} 
    {!loggedIn && <AuthStack/>} 
  </AuthContext.Provider>
  );
}