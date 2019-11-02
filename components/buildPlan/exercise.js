
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, View , Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { connect } from 'react-redux'

class ExerciseForBuildPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            back : 'white'
        };
    }

    toggleBackground = () =>{
        console.log( this.props.item )
        this.props.setSelected(this.props.item)  //callback from "exercise list" component
        this.props.addExerciseToWorkoutPlan(this.props.item);
    }

    render() {
        const pictureName = this.props.pictureName;
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <TouchableOpacity  
            onPress={() =>this.toggleBackground()}
            style={{ width : screenWidth - (screenWidth/10), height : 240  }}
            >
                <Card style={{
                    backgroundColor : this.state.back
                }}>
                    <CardImage 
                    source={pictureName} 
                    resizeMode='contain'
                    style={{backgroundColor : 'white'}}
                    />
                    <View style={{marginLeft : '5%',marginBottom : '1%'}}>
                        <Text style={{fontSize : 16}}>{this.props.exercisesName}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
}

mapStateToProps = (state) =>{
    return {
        workoutName : state.workoutName,
    }
}

mapDispatchToProps = (dispatch) =>{
    return {
        addExerciseToWorkoutPlan : (id) => dispatch({ type: 'ADD_OR_REMOVE_EXERCISE_FROM_WORKOUT_PLAN' , payload : id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseForBuildPlan)

const styles = StyleSheet.create({
    container: {
        
    },
});
