
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View , ScrollView , FlatList ,TouchableOpacity } from 'react-native';
import ExerciseForBuildPlan from "./exercise";
import { allExercises } from "../../data/exerciseData";

export default class WorkoutPlanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfChosenItems : [],
            selectedExercise : [],
        }
        for( i = 0; i < allExercises.length; i++){
            this.state.selectedExercise.push(
                { 
                    id : i ,
                    selected : false
                }
            );
        }
    }

    setSelected = (item) =>{
        const index = this.state.selectedExercise.findIndex(
            _item => String(item.id) === String(_item.id)
        );
        let temp = this.state.selectedExercise;
        temp[Number(index)].selected = !temp[Number(index)].selected;
        this.setState({
            selectedExercise : temp,
        },
            // () => alert( String(Number(index)) + '  ' + String(this.state.selectedExercise[Number(index)].selected) )
        );

        temp = this.state.listOfChosenItems;
        temp.push(item);
        this.setState({
            listOfChosenItems : temp,
        }); 
    }

    getExercise = (props) => {
        const index = this.state.selectedExercise.findIndex(
            item => Number(props.item.id) === Number(item.id)
        );
        return (
            <View style={{
                backgroundColor : this.state.selectedExercise[Number(index)].selected === true ? 'rgba(255,255,230,.7)' : null
            }}>
                <View style={{ 
                    alignSelf : 'center',
                    }}>
                    <ExerciseForBuildPlan
                        exercisesName={props.item.name} 
                        pictureName={props.item.req}
                        setSelected={this.setSelected}
                        item={props.item}
                    />
                    <Text>
                        {this.state._try}
                    </Text>
                </View>
            </View>
        );
    }

    addPlanButton = () =>{
        return(
            <View style={{ flex : 1 ,alignSelf : 'center', width : '30%'}}>
                <Button
                    title="Add workout"
                    onPress={ ()=>{
                        console.log(this.state.listOfChosenItems)
                    } }
                />
            </View>
        );
    }

    render() {
        return(
            <View  style={{flex:1 }}>
                <View style={{ flex : 6, alignItems : 'stretch', marginTop : '5%' , marginBottom : '5%'}}>
                    <FlatList
                        extraData={this.state}
                        // horizontal={true}
                        data={allExercises}
                        renderItem={ 
                            ({ item }) => this.getExercise({item})
                        }
                        keyExtractor={(item,index) => item.id}
                    />
                </View>
                {this.addPlanButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf : 'center',
        backgroundColor : '#e3b04b'
    },
    top:{
        flex : 4 ,
    },
});
