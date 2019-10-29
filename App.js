
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/homeScreen';
import WorkoutPlanScreen from './screens/workoutPlan';
import LogoTitle from './components/logo';
import CreateNewWorkout from "./screens/createNewWorkoutScreen";

const AppNavigator = createDrawerNavigator({
  Home : {
    // screen : CreateNewWorkout,
    screen : HomeScreen,
    navigationOptions : (navigation) => ({
      headerTitle : LogoTitle
    }),
  },
  NewWorkout : {
    screen : CreateNewWorkout,
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

export default createAppContainer(AppNavigator);
