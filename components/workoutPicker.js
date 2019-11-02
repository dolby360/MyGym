
import React ,{Component}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker
} from 'react-native';

import { workout } from '../enums/workouts';

class WorkoutPicker extends Component{
    constructor(props){
        super(props);
        props.setWorkoutFunc(workout.fullBody_A);
    }
    state = {
        selected : workout.fullBody_A
    }
    setSelectedValue = (value) =>{

        this.setState({ selected : value }) 
        this.props.setWorkoutFunc(value);
    }

    componentDidMount(){
        this.state.selected = this.props.defaultWorkout;
    }

    render(){
        return (
            <View>
                <Picker
                    style={{width : 200}}
                    selectedValue={this.state.selected}
                    onValueChange={ (value,index)=>this.setSelectedValue(value) }
                >
                    <Picker.Item label='Workout A' value={workout.fullBody_A} />
                    <Picker.Item label='Workout B' value={workout.fullBody_B}/>
                </Picker>
            </View>
          );
    }

};

const styles = StyleSheet.create({

});

export default WorkoutPicker;
