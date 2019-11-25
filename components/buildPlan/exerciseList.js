
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View , ScrollView , FlatList ,TouchableOpacity } from 'react-native';
import ExerciseForBuildPlan from "./exercise";
import { allExercises } from "../../data/exerciseData";
import { getPartWorkout } from "../../data/exerciseData";
import RNPickerSelect from 'react-native-picker-select';

export default class WorkoutPlanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfChosenItems : [],
            selectedExercise : [],
            part : 'none'
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

    getListByPlan = (plan) =>{
        let _data = getPartWorkout(plan);
        const nameCapitalized = plan.charAt(0).toUpperCase() + plan.slice(1);
        return(
            <View>
                <FlatList
                    extraData={this.state}
                    // horizontal={true}
                    data={_data}
                    renderItem={ 
                        ({ item }) => this.getExercise({item})
                    }
                    keyExtractor={(item,index) => item.id}
                />
            </View>
        );
    }

    selectPart = () =>{
        return(
            <View style = {{ 
                // justifyContent : 'flex-start',
                alignSelf : 'center',
                marginLeft : '1%',
                backgroundColor : 'white',
                // alignSelf : 'center',
                width : '92%',
                marginBottom : '5%'
                }}>
                <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                    placeholder={{ label: 'Chose the area you want to work on', value: 'none' }}
                    onValueChange={(value) => this.setState({part : value})}
                    items={[
                        { label: 'Chest', value: 'chest' },
                        { label: 'Legs', value: 'legs' },
                        { label: 'Triceps', value: 'triceps' },
                        { label: 'Shoulders', value: 'shoulders' },
                        { label: 'Back', value: 'back' },
                    ]}
                />
            </View>
        );
    }

    pleaseChoosePart = () => {
        return (
            <Text style={{ textAlign : 'center' , fontSize : 18}}>
                Please choose part   
            </Text>
        );
    }

    render() {
        return(
            <View  style={{flex: 8}}>
                <View style={{ alignItems : 'stretch', marginTop : '5%' , marginBottom : '20%'}}>
                    <View style={{marginLeft : '5%',flexDirection : 'row'}}>
                        {/* {this.pleaseChoosePart()} */}
                        {this.selectPart()}
                    </View>
                    {this.getListByPlan(this.state.part)}
                </View>
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
