
import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground  } from 'react-native';
import WorkoutPicker from '../components/workoutPicker';

import {workout} from '../enums/workouts';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      workoutPlan : workout.fullBody_A
    }
  }

  setWorkoutPlan = (plan) =>{
    this.setState({
      workoutPlan : plan,
    });
    // console.log(plan);
  }

  render() {
    return (
      <ImageBackground source={require('../img/cover.jpg')}  resizeMode='cover' style={styles.imageStyle}>
        <View style={styles.container}>
          <Text style={styles.text}>Choose your workout</Text>
          <WorkoutPicker setWorkoutFunc={this.setWorkoutPlan}/>

          {/* Button -> Let's Start */}
          <TouchableOpacity onPress={ ()=>{this.props.navigation.navigate('Workout',{
            workout : this.state.workoutPlan,
          })} }>
            <View style={styles.customButton}>
              <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                <Text style={styles.textButton} >
                  Let's Start
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,.6)'
  },
  text: {
    fontSize: 30,
    color : 'black',
    fontFamily: 'normal'
  },
  customButton : {
    backgroundColor : 'indigo',
    width : 150,
    height  : 50
  },
  textButton : {
      color : 'white',
      textAlign : 'center',
      fontSize : 20,
  },
  imageStyle:{
    width: '100%', 
    height: '100%', 
    flex: 1,
   }
});
