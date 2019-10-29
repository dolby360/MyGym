
import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground  } from 'react-native';
import WorkoutPicker from '../components/workoutPicker';
import Header from '../components/header';
import {workout} from '../enums/workouts';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      workoutPlan : workout.fullBody_A
    }
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('lastPlanUsed');
      if (value !== null) {
        this.setState({
          workoutPlan : value
        });
      }
    } catch (error) {
    }
  };

  storeData = async () => {
    try {
        await AsyncStorage.setItem('lastPlanUsed', this.state.workoutPlan);
    } catch (error) {
        // Error saving data
    }
  };

  setWorkoutPlan = (plan) =>{
    this.setState({
      workoutPlan : plan,
    });
    // console.log(plan);
  }

  toggleSideBar = () =>{
    this.props.navigation.toggleDrawer();
  }

  render() {
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
              <WorkoutPicker setWorkoutFunc={this.setWorkoutPlan}/>
            </View>
            
            <View style={{flex : 1,alignSelf: 'center',}}>
              {/* Button -> Let's Start */}
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
