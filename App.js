
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/homeScreen';
import WorkoutPlanScreen from './screens/workoutPlan';
import LogoTitle from './components/logo';


const AppNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen,
    // navigationOptions : (navigation) => ({
    //   headerTitle : LogoTitle
    // }),
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

// const AppNavigator = createStackNavigator({
//   Home : {
//     screen : HomeScreen,
//     navigationOptions : (navigation) => ({
//       headerTitle : LogoTitle
//     }),
//   },
//   Workout : {
//     screen : WorkoutPlanScreen
//   },
// },{
//   initialRouteName : 'Home'
// });

export default createAppContainer(AppNavigator);
