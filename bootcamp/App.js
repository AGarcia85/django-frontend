import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Signup from './components/authorization/Signup';
import Login from './components/authorization/Login';
import Instructors from './components/Instructors';
import Rate from './components/Rate';

export default function App() {
  const [outputText, setOutputText] = useState('Rate My Bootcamp Instructor')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <View>
        <Button title='Home' />
        <Button title='Sign Up' />
        <Button title='Login' />
        <Button title='Instructors' />
        <Button title='Rate an Instructor' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
});
