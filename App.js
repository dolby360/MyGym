import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/homeScreen';
import WorkoutPlanScreen from './screens/workoutPlan';
import LogoTitle from './components/logo';
import CreateNewWorkout from "./screens/createNewWorkoutScreen";
import DeleteWorkout from "./screens/deletePlanScreen";

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers/newWorkout_reducer';

const AppNavigator = createDrawerNavigator({
  Home : {
    // screen : DeleteWorkout,
    screen : HomeScreen,
    navigationOptions : (navigation) => ({
      headerTitle : LogoTitle
    }),
  },
  NewWorkout : {
    screen : CreateNewWorkout,
    navigationOptions : {
      title: 'New Workout',
    },
  },
  DeletePlans : {
    screen : DeleteWorkout,
    navigationOptions : {
      title: 'Delete Workout Plan',
    },
  },
  Workout : {
    screen : WorkoutPlanScreen,
    navigationOptions : (navigation) => ({
      drawerLabel: () => null
    }),
  },
},{
  // initialRouteName : 'Home'
});

let Navigation  = createAppContainer(AppNavigator); 

export default class App extends React.Component {
  render() { 
    return (
      <Provider store={createStore(reducer)}>
        <Navigation />
      </Provider>
    );
  }
}
