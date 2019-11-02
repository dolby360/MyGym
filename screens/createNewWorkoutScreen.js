
import React, { Component } from 'react';
import { Button,StyleSheet, Text, View ,TouchableOpacity,ImageBackground  } from 'react-native';
import  Header  from "../components/header";
import WorkoutField from "../components/buildPlan/workoutField";
import ExerciseList from '../components/buildPlan/exerciseList';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

class CreateNewWorkout extends Component {
  constructor(props) {
    super(props);
    state = {
    }
  }

  retrieveData = async (key) => {
    let value;
    try {
      value = await AsyncStorage.getItem(key);
    } catch (error) {
    }
    return value;
  };

  storeData = async () => {
    try {
        let value = await this.retrieveData( '@#' + this.props.workoutName);
        if( value !== null){
          await AsyncStorage.removeItem( '@#' + this.props.workoutName)
        }
        await AsyncStorage.setItem(this.props.workoutName, this.props.workoutPlan);
    } catch (error) {
        // Error saving data
    }
  };

  toggleSideBar = () =>{
    this.props.navigation.toggleDrawer();
  }

  addPlanButton = () =>{
    return(
        <View style={{ flex : 1, alignSelf : 'center', width : '30%'}}>
            <Button
                title="Add workout"
                onPress={ ()=>{
                    console.log(this.props.workoutName)
                    console.log(this.props.workoutPlan)
                } }
            />
        </View>
    );
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
            {this.addPlanButton()}
          </View>
        </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    workoutName : state.workoutName,
    workoutPlan : state.workoutPlan,
  }
}

export default connect(mapStateToProps)(CreateNewWorkout);

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
