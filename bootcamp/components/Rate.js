import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Rate My Bootcamp Instructor')
  return (
    <View>
        <Text>{outputText}</Text>
        <View style={{padding: 30, width: "60%"}}>
            <TextInput placeholder="Add Instructor Name"
            style={{ borderColor: black}}/>
            <Button title='Add' />
        </View>
        <View>

        </View>
    </View>
  );
}