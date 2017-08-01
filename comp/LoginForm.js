import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import TitledInput from './TitledInput';
import { Button } from 'native-base';
import Home from './Home'


class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false, isAuthenticated: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              this.setState({ error: '', loading: false, isAuthenticated: true  });
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <ActivityIndicator size='small' />;
        }
        return <Button block onPress={this.onLoginPress.bind(this)}>
            <Text>Log In</Text>
        </Button>;
    }
    render() {
        if(this.state.isAuthenticated) {
            return (
                <View style={styles.container}>
                    <Text>Successfully Authenticated!</Text>
                </View>
            );
        }
        return (
          <View style={styles.container} behavior='position'>
            <TitledInput
                label='Email'
                placeholder='you@domain.com'
                autoCapitalize='none'
                keyboardType='email-address'
                returnKeyType='next'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <TitledInput
                label='Password'
                autoCorrect={false}
                placeholder='*******'
                secureTextEntry
                autoCapitalize='none'
                keyboardType='email-address'
                returnKeyType='done'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            {this.renderButtonOrSpinner()}
          </View>

        );
    }
}
const styles = {
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 12
    },
    submitButton: {
        paddingTop: 10
    },
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
};

export default LoginForm;
