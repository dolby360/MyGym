
import React ,{Component}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  Image,
  FlatList
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { workout } from '../enums/workouts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import * as customPlanUtil  from '../logicLevel/customPlans';


class WorkoutPicker extends Component{
    constructor(props){
        super(props);
        props.setWorkoutFunc(workout.fullBody_A);
        this.updateListOfAllCustomPlans();
    }

    updateListOfAllCustomPlans = async () => {
        let list = await customPlanUtil.getAllCustomData();
        this.props.updateListOfAllCustomPlans(list);
    }

    state = {
        selected : workout.fullBody_A,
    }
    setSelectedValue = (value) =>{

        this.setState({ selected : value }) 
        this.props.setWorkoutFunc(value);
    }

    componentDidMount(){
        this.state.selected = this.props.initialWorkout;
    }

    checkIcon = (workoutType) =>{
        if( this.state.selected === workoutType ){
            return(
                <Image 
                    style ={{ height : textButtonHeight,width : textButtonHeight, marginRight : '5%'}}
                    source={require('../img/check.png')} 
                />
            );
        }
        return null;
    }

    fullBodyCard = () =>{
        return(
            <Card style={styles.cardFullBody}>
                <Text style={{ flex : 1, alignSelf : 'center',textAlign : 'center',marginLeft : 5,fontSize : 20}}>Full Body</Text>
                <View style={{ justifyContent : 'flex-end', flexDirection : 'column', flex : 5}}>
                    <TouchableOpacity style={styles.fullBodyPick} onPress={ () => this.setSelectedValue(workout.fullBody_A)}>
                        <Text style={ styles.workoutText }>Workout A</Text>
                        {this.checkIcon(workout.fullBody_A)}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fullBodyPick} onPress={ () => this.setSelectedValue(workout.fullBody_B)}>
                        <Text style={ styles.workoutText }>Workout B</Text>
                        {this.checkIcon(workout.fullBody_B)}
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }


    setCustomWorkoutPlan = async (name) =>{
        let plan;
        console.log('look here ->')
        console.log(name)
        try {
            plan = await AsyncStorage.getItem('@#' + name);
        } catch(e) {
            alert(e);
        }
        
        console.log( JSON.parse(plan) );
        this.props.setCustomWorkout(JSON.parse(plan));
    }

    getCustomItem = (props) =>{
        return(
            <TouchableOpacity style={styles.fullBodyPick} onPress={ 
                () => {
                    this.setSelectedValue(props.item.id)
                    this.setCustomWorkoutPlan(props.item.name);
                }}>
                <Text style={ styles.workoutText }>{props.item.name}</Text>
                {this.checkIcon(props.item.id)}
            </TouchableOpacity>
        );
    } 

    customPlan = () => {
        console.log('but then I updated')
        return(
            <Card style={styles.cardCustom}>
                <Text style={{ flex : 1, alignSelf : 'center',textAlign : 'center',marginLeft : 5,fontSize : 20}}>Custom Plans</Text>
                <View style={{ flexDirection : 'column', flex : 5}}>
                    <FlatList
                        extraData={this.state}
                        // horizontal={true}
                        data={this.props.allCustomPlansData}
                        renderItem={ 
                            ({ item }) => this.getCustomItem({item})
                        }
                        keyExtractor={(item,index) => item.id}
                    />
                </View>
            </Card>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                {this.fullBodyCard()}
                {this.customPlan()}
            </View>
        );
    }

};

function mapStateToProps(state) {
    return {
        allCustomPlansData : state.allCustomPlansData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCustomWorkout: (plan) => dispatch({ type: 'CUSTOM_PLAN' , payload : plan}),
        updateListOfAllCustomPlans : (listOfCustomPlans) => dispatch({ type: 'UPDATE_LIST_OF_ALL_CUSTOM_PLANS' , payload : listOfCustomPlans}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WorkoutPicker)


const textButtonHeight = 40;

const styles = StyleSheet.create({
    fullBodyPick : {
        flexDirection : 'row',
        backgroundColor : '#A8D3EE',
        width : '90%',
        marginBottom : '7%',
        height : textButtonHeight,
        alignSelf : 'center',
        justifyContent: 'space-between',
        borderRadius:10,
        borderWidth: 1,
        // flex : 1,
    },
    container : {
        flex : 1,
    },
    cardFullBody : {
        flexDirection : 'column',
        alignSelf : 'center',
        width : '80%',
        alignItems : 'stretch',
        borderRadius:10,
        borderWidth: 1,
        flex : 1.2,
    },
    cardCustom : {
        flexDirection : 'column',
        alignSelf : 'center',
        width : '80%',
        alignItems : 'stretch',
        borderRadius:10,
        borderWidth: 1,
        flex : 2
    },
    workoutText : {
        marginBottom : textButtonHeight / 2,
        textAlignVertical : 'center',
        marginLeft : 5,
        fontSize : 16,
    }
});
