
import React, { Component } from 'react';
import { Button,StyleSheet, Text, View ,TouchableOpacity,ImageBackground  } from 'react-native';
import  Header  from "../components/header";
import WorkoutField from "../components/buildPlan/workoutField";
import ExerciseList from '../components/buildPlan/exerciseList';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import * as customPlanUtil  from '../logicLevel/customPlans';

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
          await AsyncStorage.removeItem( '@#' + this.props.workoutName);
        }
        await AsyncStorage.setItem( '@#' + this.props.workoutName, JSON.stringify(this.props.workoutPlan));
        let list = await customPlanUtil.getAllCustomData();
        this.props.updateListOfAllCustomPlans(list);
        //Because next time we don't want that all the configuration from last creating workout 
        //will remain. 
        // this.props.clearWorkoutData(); 
    } catch (error) {
        // Error saving data
        alert(error)
    }
    console.log(JSON.stringify(this.props.workoutPlan));
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
                    console.log('on press add plan button:')
                    console.log(this.props.workoutName)
                    console.log(this.props.workoutPlan)
                    this.storeData();
                    this.props.navigation.navigate('Home')
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

function mapDispatchToProps(dispatch) {
  return {
      updateListOfAllCustomPlans : (newPlan) => dispatch({ type: 'UPDATE_LIST_OF_ALL_CUSTOM_PLANS' , payload : newPlan}),
      clearWorkoutData : () => dispatch({ type: 'CLEAR_WORKOUT_PLAN' , payload : null}),
      setWorkoutName : (text) => dispatch({ type: 'NEW_WORKOUT_NAME' , payload : text})
  }
}

function mapStateToProps(state) {
  return {
    workoutName : state.workoutName,
    workoutPlan : state.workoutPlan,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateNewWorkout);

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
