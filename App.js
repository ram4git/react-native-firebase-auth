import React from 'react';
import { StyleSheet, NavigatorIOS, Text, View, Image, Animated, Easing, Touch, Button } from 'react-native';
import firebase from 'firebase';
import LoginForm from './comp/LoginForm'

export default class App extends React.Component {
  constructor () {
    super();
    this.spinValue = new Animated.Value(0)
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAvJNI9trXnxt1KmrddPrZKgtAyJhBE1GE',
      authDomain: 'rnative-a1d37.firebaseapp.com',
      databaseURL: 'https://rnative-a1d37.firebaseio.com',
      projectId: 'rnative-a1d37',
      storageBucket: 'rnative-a1d37.appspot.com',
      messagingSenderId: '831730367160'
    });
  }


  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '60deg']
    });

    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }

  componentDidMount () {
    this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 110,
    width: 120,
    top: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: 'red'
  },
  footer: {
    marginBottom: 20,
  },
  footerText: {
    color: '#2980b9',
    fontWeight: '600',
    fontSize: 16
  }
});
