
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, View , Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class ExerciseForBuildPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            back : 'white'
        };
        this.retrieveData();
    }
    
    retrieveData = async () => {
        // try {
        //   const value = await AsyncStorage.getItem(this.props.exercisesName);
        //   if (value !== null) {
        //     this.setState({
        //         inputValue : value
        //     });
        //   }
        // } catch (error) {
        // }
      };

    storeData = async () => {
        // try {
        //     await AsyncStorage.setItem(this.props.exercisesName, this.state.inputValue);
        // } catch (error) {
        //     // Error saving data
        // }
    };

    toggleBackground = () =>{
        console.log( this.props.item )
        this.props.setSelected(this.props.item)
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
                    {/* <CardContent text={this.props.exercisesName} /> */}
                    {/* <CardTitle
                        subtitle={this.props.exercisesName}
                    /> */}
                    <CardImage 
                    // title={this.props.exercisesName}
                    source={pictureName} 
                    resizeMode='contain'
                    style={{backgroundColor : 'white'}}
                    />
                    {/* <CardContent text={this.props.exercisesName}/> */}
                    {/* <CardAction separator={true}/>  */}
                    <View style={{marginLeft : '5%',marginBottom : '1%'}}>
                        <Text style={{fontSize : 16}}>{this.props.exercisesName}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
});
