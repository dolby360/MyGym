
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/homeScreen';
import WorkoutPlanScreen from './screens/workoutPlan';
import LogoTitle from './components/logo';

const AppNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions : (navigation) => ({
      headerTitle : LogoTitle
    }),
  },
  Workout : {
    screen : WorkoutPlanScreen
  },
},{
  initialRouteName : 'Home'
});

export default createAppContainer(AppNavigator);
