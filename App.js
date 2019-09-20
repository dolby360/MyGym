
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

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <HomeScreen/>
//     </View>
//   );
// };

const AppNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen
  },
  Workout : {
    screen : WorkoutPlanScreen
  },
},{
  initialRouteName : 'Workout'
});

export default createAppContainer(AppNavigator);
