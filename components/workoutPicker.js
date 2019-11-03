
import React ,{Component}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
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
            <View style={styles.container}>
                <Card style={styles.card}>
                    {/* <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    resizeMode='contain'
                    style={{backgroundColor : 'white'}}
                    /> */}
                    <Text style={{ alignSelf : 'center',textAlign : 'center',marginLeft : 5,fontSize : 20}}>Full Body</Text>
                    <View style={{marginLeft : '5%',marginBottom : '1%'}}>
                        <Text style={{fontSize : 16}}>{this.props.exercisesName}</Text>
                    </View>
                </Card>

                {/* <Picker
                    style={{width : 200}}
                    selectedValue={this.state.selected}
                    onValueChange={ (value,index)=>this.setSelectedValue(value) }
                >
                    <Picker.Item label='Workout A' value={workout.fullBody_A} />
                    <Picker.Item label='Workout B' value={workout.fullBody_B}/>
                </Picker> */}
            </View>
          );
    }

};

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    card : {
        alignSelf : 'center',
        width : '80%'
    }
});

export default WorkoutPicker;
