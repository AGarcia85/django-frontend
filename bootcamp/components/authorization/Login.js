import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Rate My Bootcamp Instructor')
  return (
    <View style={styles.container}>
        <Text>{outputText}</Text>
        <View style={{padding: 30}}>
            <TextInput placeholder="User name"
            style={{ borderColor: "black"}} />
            <TextInput placeholder="Password"
            style={{ borderColor: "black"}} />
            <Button title="Enter" />
        </View>
    </View>
  );
}