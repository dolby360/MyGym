
import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView , FlatList} from 'react-native';
import { workout } from '../enums/workouts';
import Exercises from '../components/Exercise';
import StopWatch from '../components/stopWatch';

const exercisesPath = '../img/Exercises/';

const fullBody_A_data = [
    {
        req :require(exercisesPath + 'Barbell_Bench_Press'               + '.jpg'),
        name    : 'Barbell Bench Press'
    },
    {
        req :require(exercisesPath + 'Barbell_Back_Squat'                + '.jpg'),
        name    : 'Barbell Back Squat'
    },
    {
        req :require(exercisesPath + 'Pull_Ups'                          + '.jpg'),
        name    :'Pull Ups'
    },
    {
        req :require(exercisesPath + 'Lying_Dumbbell_Hamstring_Curls'    + '.jpg'),
        name    :'Lying Dumbbell Hamstring Curls'
    },
    {
        req :require(exercisesPath + 'Standing_Overhead_Press'           + '.jpg'),
        name    :'Standing Overhead Press'
    },
    {
        req :require(exercisesPath + 'Face_Pulls'                        + '.jpg'),
        name    :'Face Pulls'
    },
    {
        req :require(exercisesPath + 'Drag_Curls'                        + '.jpg'),
        name    :'Drag Curls'
    }
];


export default class WorkoutPlanScreen extends Component {

    constructor(props) {
        super(props);
    }

    getExercise = (props) => {
        console.log('getExercise');
        console.log(props);
        console.log('req');
        console.log(props.item.req);

        return (
            <View style={styles.container}>
                <Exercises pictureName={props.item.req}/>
            </View>
        );
    }

    getData = (plan) =>{
        let data = null;
        switch (plan) {
            case workout.fullBody_A:
                data = fullBody_A_data;
                break;
            default:
                break;
        }
        return data;
    }

    render() {
        //TODO: make null as default 
        const workoutPlan = this.props.navigation.getParam('workout',workout.fullBody_A);
        let data = this.getData(workoutPlan);
        return(
            <View style={{flex:1}}>
                <View style={styles.top}>
                    <ScrollView>
                        <View style={styles.scroll}>
                        <FlatList
                            data={data}
                            renderItem={ 
                                ({ item }) => this.getExercise({item})
                            }
                            // keyExtractor={(item,index) => index}
                        />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.stopwatch}>
                    <StopWatch/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        // width : '100%',
        // height : 225,
        // backgroundColor : 'blue'
    },
    top:{
        flex : 4 ,
        // backgroundColor : 'blue'
    },
    scroll : {
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor: 'rgba(0,0,0,.1)',
        // marginHorizontal: 20,
    }, 
    stopwatch:{
        flex : 1,
        backgroundColor : 'rgba(0,0,0,.3)',
    },
});
