import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Signup from './components/authorization/Signup';
import Login from './components/authorization/Login';
import Instructors from './components/Instructors';
import Rate from './components/Rate';

export default function App() {
  const [outputText] = useState('Rate My Bootcamp Instructor')
  return (
    <View style={{padding: 50, alignSelf: "center"}}>
      <Text>{outputText}</Text>
      <View style={styles.container}>
        <Button title='Sign Up'>
          <Signup />
        </Button>
        <Button title='Login' />
        <Button title='Instructors' />
        <Button title='Add an Instructor' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
