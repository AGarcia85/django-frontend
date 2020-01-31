import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Rate My Bootcamp Instructor')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Bootcamp" onPress={() => setOutputText()}/>
    </View>
  );
}