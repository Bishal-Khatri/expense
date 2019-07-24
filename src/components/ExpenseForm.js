import React from "react";
import { StyleSheet, Text, TextInput, Picker, Button, View } from 'react-native';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      itemName: '' ,
      itemPrice: '',
      paidBy:''
    };
  }

  submitForm() {
    alert('sdf')
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <Text style={{ justifyContent:'center' }}>
            Expense Form
          </Text>
        </View>
        <View style={styles.formGroup}>
          <Text>
            Item Name
          </Text>
          <TextInput
            style={ styles.textInput }
            placeholder="Enter Item Name"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.itemName}
          />
          </View>

        <View style={styles.formGroup}>
          <Text>
            Price
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Item Price"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.itemPrice}
          />
          </View>

        <View style={styles.formGroup}>
          <Text style={{ paddingTop:3 }}>
            Paid By
          </Text>
          <Picker
            selectedValue={this.state.paidBy}
            style={styles.pickerInput}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ paidBy: itemValue })
          } >
          <Picker.Item label="Bishal" value="Bishal" />
            <Picker.Item label="Mukesh" value="Mukesh" />
          </Picker>
        </View>
        <View style={{ paddingTop:15 }}>
          <Button title="Submit" color="#841584" onPress={this.submitForm}/>
        </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
    flex: 6, 
    width: 100 + '%', 
    height: 100 + '%',
    paddingLeft: 10,
    paddingRight: 10
},
textInput: {
  height: 40,
  borderColor: '#c5c5c5',
  borderBottomWidth: 1
},
pickerInput: {
  height: 40,
  borderColor: '#c5c5c5',
  borderWidth: 1
},
formGroup:{
  padding:10
}
})
