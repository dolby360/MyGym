
import React, { Component } from 'react';
import {TextInput , SafeAreaView , StyleSheet, Text, View , Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Counter from '../components/counter';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : ''
        };
        this.retrieveData();
    }
    
    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem(this.props.exercisesName);
          if (value !== null) {
            this.setState({
                inputValue : value
            });
          }
        } catch (error) {
        }
      };

    storeData = async () => {
        try {
            await AsyncStorage.setItem(this.props.exercisesName, this.state.inputValue);
        } catch (error) {
            // Error saving data
        }
    };

    inputValueChange = newValue =>{this.setState({inputValue : newValue});}



    render() {
        const pictureName = this.props.pictureName;
        console.log(pictureName);
        return (
            <Card style={styles.container}>
                <CardImage 
                // title={this.props.exercisesName}
                source={pictureName} 
                resizeMode='contain'
                style={{backgroundColor : 'white'}}
                />
                <CardContent text={this.props.exercisesName}/>
                <CardAction separator={true}/> 
                <Text style={{fontSize : 16,marginLeft : 10}}>Weight</Text>
                <View style={styles.bottom}>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={ text => this.inputValueChange( text )}
                        value={this.state.inputValue}
                        keyboardType='number-pad'
                        onSubmitEditing={this.storeData}
                    />
                    <View style={styles.counter}>
                        <Counter/>
                    </View>
                </View>
            </Card>

        );
    }
}

const styles = StyleSheet.create({
    inputText : { 
        flex : 1,
        alignSelf : 'center',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 ,
        marginLeft : 10,
    },
    bottom :{
        justifyContent :'space-evenly',
        flexDirection : 'row',
        flex : 1
    },
    container: {
        // backgroundColor : 'red',
        justifyContent : 'center',
        alignSelf: 'stretch',
        // flexDirection : 'column',
        width : 390,
        // height : '100%',
        marginBottom : 20
    },
    text: {
        fontSize: 20,
    },
    imageStyle :{
        width: '100%', 
        height : '65%',
        // flex: 1,
        padding : 0,
        margin : 0,
    },
    counter : {
        flex : 3,
        alignSelf : 'center',
        // backgroundColor : 'red',
        flexDirection : 'row',
        justifyContent : 'flex-end',
        // alignItems : 'flex-start'
        marginBottom : 15,
        marginRight : 10
    },
});
