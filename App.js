import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expense from './src/Expense';

export default function App() {
  return (
   <Expense />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
