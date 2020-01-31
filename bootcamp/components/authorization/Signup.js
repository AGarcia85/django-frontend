import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Rate My Bootcamp Instructor')
  
  const [enterInput, setEnterInput] = useState('')

  const inputHandler = (enterText) => {
      setEnterInput(enterText);
  }

  const addInput = () => {
      console.log(enterInput)
  }
  return (
    <View style={styles.container}>
        <Text>{outputText}</Text>
        <View style={{padding: 30}}>
            <TextInput placeholder="Name"
            style={{ borderColor: "black"}} onChangeText={inputHandler} value={enterInput} 
             />
            <TextInput placeholder="Email"
            style={{ borderColor: "black"}} />
            <TextInput placeholder="User name"
            style={{ borderColor: "black"}} />
            <TextInput placeholder="Password"
            style={{ borderColor: "black"}} />
            <TextInput placeholder="Re-enter Password"
            style={{ borderColor: "black"}} />
            <Button title="Sign up" onPress={addInput} />
        </View>
    </View>
  );
}