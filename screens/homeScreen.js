
import React, { Component } from 'react';
import { Button,StyleSheet, Text, View ,TouchableOpacity,ImageBackground  } from 'react-native';
import WorkoutPicker from '../components/workoutPicker';
import Header from '../components/header';
import {workout} from '../enums/workouts';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    
    this.retrieveData();
  }
  state = {
    workoutPlan : workout.fullBody_A
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('lastPlanUsed');                                                          
      if (value !== null) {
        this.setState({
          workoutPlan : Number(value)
        });
      }
    } catch (error) {
      alert(error)
    }
  };

  storeData = async () => {
    try {
        await AsyncStorage.setItem('lastPlanUsed', String(this.state.workoutPlan));
    } catch (error) {
        // Error saving data
        alert(error)
    }
  };

  setWorkoutPlan = (plan) =>{
    this.setState({
      workoutPlan : plan,
    });
    console.log(plan);
  }

  toggleSideBar = () =>{
    this.props.navigation.toggleDrawer();
  }

  letsStart = () =>{
    return(
      <View style={{flex : 1,alignSelf: 'center',}}>
        <TouchableOpacity onPress={ ()=>{
              this.storeData();
              this.props.navigation.navigate('Workout',{workout : this.state.workoutPlan,})
            } 
          }>
          <View style={styles.customButton}>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
              <Text style={styles.textButton} >
                Let's Start
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  test = async () =>{
    // let keys = []
    // try {
    //   keys = await AsyncStorage.getAllKeys()
    // } catch(e) {
    //   // read key error
    // }
    // console.log(keys);

    let value;
    try {
      value = await AsyncStorage.getItem('@#Chu');
    } catch (error) {
    }
    console.log( JSON.parse(value) );
  }

  render() {
    this.test();
    return (
        <ImageBackground source={require('../img/cover.jpg')}  resizeMode='cover' style={styles.imageStyle}>
          <Header
            toggleDrawer={this.toggleSideBar}
          />
          <View style={styles.container}>

            <View style={{ marginTop : '5%',flex : 1, alignSelf : 'center'}}>
              <Text style={styles.text}>Choose your workout</Text>
            </View>
            
            <View style={styles.planPick}>
              <Text style={{ marginLeft : 5,fontSize : 20}}>Full Body</Text>
              <WorkoutPicker 
                setWorkoutFunc={this.setWorkoutPlan}
                initialWorkout={this.state.workoutPlan}
              />
            </View>
            {this.letsStart()}
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  planPick : {
    margin : 10,
    alignItems : 'flex-start',
    // backgroundColor : 'red',
    flex : 3,
    justifyContent : 'center'
  },
  container: {
    flex: 1,
    flexDirection : 'column',
    // backgroundColor: '#fff',
    // alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,.6)'
  },
  text: {
    fontSize: 30,
    color : 'black',
    fontFamily: 'normal'
  },
  customButton : {
    backgroundColor : '#1b7fbd',
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
