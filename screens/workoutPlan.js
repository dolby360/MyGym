
import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView , FlatList} from 'react-native';
import { workout } from '../enums/workouts';
import Exercises from '../components/Exercise';
import StopWatch from '../components/stopWatch';
import { fullBody_A_data , fullBody_B_data } from '../data/exerciseData';
import { BorderlessButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class WorkoutPlanScreen extends Component {

    constructor(props) {
        super(props);
    }

    getExercise = (props) => {
        // console.log('getExercise');
        // console.log(props);
        // console.log('req');
        // console.log(props.item.req);

        return (
            <View style={styles.container}>
                <Exercises
                    exercisesName={props.item.name} 
                    pictureName={props.item.req}/>
            </View>
        );
    }

    getData = (plan) =>{
        let data = null;
        switch (plan) {
            case workout.fullBody_A:
                data = fullBody_A_data;
                break;
            case workout.fullBody_B:
                data = fullBody_B_data;
            break;
            default:
                data = this.props.customWorkoutPlan;
                break;
        }
        return data;
    }

    render() {
        //TODO: make null as default 
        const workoutPlan = this.props.navigation.getParam('workout',null);
        let data = this.getData(workoutPlan);
        return(
            <View style={{flex:1 , }}>
                <View style={styles.top}>
                    <ScrollView>
                        <View style={styles.scroll}>
                            <View style={{marginTop : 20}}>
                                <FlatList
                                    data={data}
                                    renderItem={ 
                                        ({ item }) => this.getExercise({item})
                                    }
                                    keyExtractor={(item,index) => item.id}
                                />
                            </View>
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

function mapStateToProps(state) {
    return {
      customWorkoutPlan : state.customWorkoutPlan,
    }
  }
  
export default connect(mapStateToProps)(WorkoutPlanScreen)

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
