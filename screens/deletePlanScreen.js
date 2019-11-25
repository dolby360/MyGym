
import React, { Component } from 'react';
import { 
    Button,
    StyleSheet, 
    Text, 
    View ,
    TouchableOpacity,
    ImageBackground ,
    FlatList,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import  Header  from "../components/header";
import { connect } from 'react-redux'
import * as customPlanUtil  from '../logicLevel/customPlans';

class DeleteWorkout extends Component {
    constructor(props) {
        super(props);
        this.updateListOfAllCustomPlans();
    }

    updateListOfAllCustomPlans = async () => {
        let list = await customPlanUtil.getAllCustomData();
        this.props.updateListOfAllCustomPlans(list);
    }

    getCustomItem = (props) =>{
        if(this.props.allCustomPlansData === []){
            return null;
        }
        return(
            <TouchableOpacity style={styles.picker} onPress={ () => this.deleteItemMessage(props) }>
                <Text style={ styles.planText }>{props.item.name}</Text>
            </TouchableOpacity>
        );
    } 

    deleteItem = async (props) =>{
        console.log('*********************>>>>>>>>>>>>props:')
        console.log(props);
        try {
            await AsyncStorage.removeItem('@#' + props.item.name)
        } catch(e) {
            alert(e)
        }
        let list = await customPlanUtil.getAllCustomData();
        this.props.updateListOfAllCustomPlans(list);
    }

    deleteItemMessage = (props) =>{
        Alert.alert(
        'Delete plan',
        'Are you sure that you want to delete this plan?',
            [
                // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},

                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },

                {text: 'OK', onPress: () => this.deleteItem(props) },
            ],
            // {cancelable: false},
        );
    }

    content = () =>{
        return(
            <View style={styles.container}>
                <Text style={{ marginBottom : '5%',marginTop : '5%',fontSize : 22,alignSelf : 'center'}}> Delete Costume Workout Plan</Text>
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
        );
    }

    render() {
        return (  
            <ImageBackground 
            source={require('../img/cover.jpg')}  
            resizeMode='cover' 
            style={styles.imageStyle}>
                <Header toggleDrawer={ () => this.props.navigation.toggleDrawer()} />
                {this.content()}
            </ImageBackground>
        );
    }
}

function mapStateToProps(state) {
    return {
        allCustomPlansData : state.allCustomPlansData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateListOfAllCustomPlans : (list) => dispatch({ type: 'UPDATE_LIST_OF_ALL_CUSTOM_PLANS' , payload : list})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteWorkout)


const textButtonHeight = 40;

const styles = StyleSheet.create({
    picker : {
        flexDirection : 'row',
        backgroundColor : '#A8D3EE',
        width : '90%',
        marginBottom : '7%',
        height : textButtonHeight,
        alignSelf : 'center',
        justifyContent: 'space-between',
        borderRadius:10,
        borderWidth: 1,
    },
    container: {
        flex: 1,
        flexDirection : 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(255,255,255,.6)'
    },
    imageStyle:{
        width: '100%', 
        height: '100%', 
        flex: 1,
    },
    planText : {
        marginBottom : textButtonHeight / 2,
        textAlignVertical : 'center',
        marginLeft : 5,
        fontSize : 16,
    }
});
