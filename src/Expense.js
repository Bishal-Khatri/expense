import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ExpenseForm from './components/ExpenseForm'

export default class Expense extends React.Component {
  render(){
    return(
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav} >
          <Text>Expense</Text>
        </View>
        {/* <ExpenseForm /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 56,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
