
import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground  } from 'react-native';
import  Header  from "../components/header";
import WorkoutField from "../components/buildPlan/workoutField";
import ExerciseList from '../components/buildPlan/exerciseList';

export default class CreateNewWorkout extends Component {
  constructor(props) {
    super(props);
    state = {
    }
    this.retrieveData();
  }

  retrieveData = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('lastPlanUsed');
    //   if (value !== null) {
        
    //   }
    // } catch (error) {
    // }
  };

  storeData = async () => {
    try {
        await AsyncStorage.setItem('null', null);
    } catch (error) {
        // Error saving data
    }
  };

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
            <WorkoutField/>
            <ExerciseList/>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        // backgroundColor: 'blue',
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(255,255,255,.6)'
    },
    imageStyle:{
        width: '100%', 
        height: '100%', 
        flex: 1,
    },
});
