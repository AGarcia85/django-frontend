import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Rate My Bootcamp Instructor')
  return (
    <View>
        <Text>{outputText}</Text>
        <View style={{padding: 30}}>
            <TextInput placeholder="Search by name or school"
            style={{ borderColor: "black"}} />
            <Button title="Search" />
        </View>
    </View>
  );
}