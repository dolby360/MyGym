
import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableOpacity } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        count : 0
    };
  }

  incrementCounter = () =>{
    this.setState({
        count : this.state.count + 1,
    });
  }

  decrementCounter = () =>{
    if(this.state.count == 0){
        return
    }
    this.setState({
        count : this.state.count - 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}  onPress={this.incrementCounter}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>
            {this.state.count}
        </Text>
        <TouchableOpacity style={styles.button} textStyle={styles.buttonText} onPress={this.decrementCounter}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
        marginTop : 15,
        flexDirection : 'row',
        // justifyContent: 'flex-end',
    },
    baseText: {
      // fontFamily: 'monospace',
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      // textAlign : 'left'
      marginRight: 20,
      marginLeft : 20,
    },
    button:{
        width : 50,
        height : 50,
        // justifyContent: 'flex-end',

        // marginBottom :50,

        borderWidth: 4,
        borderColor: 'grey',
        borderRadius: 9,
    },
    buttonText :{
        textAlign : 'center',
        fontSize : 25,
        // alignSelf : 'center',
    }
});
  
