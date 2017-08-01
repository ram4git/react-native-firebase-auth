import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize, keyboardType, returnKeyType }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label.toUpperCase()}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: 'green',
        fontSize: 20,
        fontWeight: '200',
        flex: 1,
        height: 40,
        width: 240
    },
    labelStyle: {
        fontSize: 16,
        color: 'blue',
        fontWeight: '200',
        flex: 1
    },
    containerStyle: {
        height: 40,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        borderBottomWidth: 1,
        margin: 10
    }
};

export default TitledInput;
