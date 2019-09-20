/*This is an Example of Timer/Stopwatch in React Native */
import React, { Component } from 'react';
//import React in our project
import { StyleSheet,Text,View, TouchableHighlight } from 'react-native';
//import all the required components
import { Stopwatch } from 'react-native-stopwatch-timer';
//importing library to use Stopwatch and Timer
 
export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 90000,
      resetTimer: false,
      resetStopwatch: false,
    };
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
  startStopStopWatch() {
    this.setState({isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false});
  }
  resetStopwatch() {
    this.setState({isStopwatchStart: false, resetStopwatch: true});
  }
  getFormattedTime(time) {
      this.currentTime = time;
  }
  render() {
    return (
      <View style={styles.allStopWatchComponent}>
          <Stopwatch laps msecs 
            start={this.state.isStopwatchStart} //To start
            reset={this.state.resetStopwatch}   //To reset
            options={stopWatchStyle}            //options for the styling
            getTime={this.getFormattedTime} />
          <View style={styles.buttons}>
            <TouchableHighlight style={ {marginRight: 30}} onPress={this.startStopStopWatch}>
              <Text style={styles.buttonText}>
                { !this.state.isStopwatchStart ? "START" : "STOP"}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={ {marginLeft: 30}} onPress={this.resetStopwatch}>
              <Text style={styles.buttonText}>RESET</Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allStopWatchComponent : {
    justifyContent: 'flex-end',
    marginBottom : 60
  },
  buttons : {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText : {
    fontSize: 30, 
    marginTop: 20,
    color : '#fff',
  }
});


const stopWatchStyle = {
  container: {
    backgroundColor: '#444444',
    padding: 5,
    borderRadius: 0,
    alignItems:'center',
  },
  text: {
    fontSize: 40,
    color: '#FFF',
  }
};