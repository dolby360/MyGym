
import React, { Component } from 'react';
import { TextInput , SafeAreaView , StyleSheet, Text, View , Image} from 'react-native';
import Counter from '../components/counter';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class Exercise extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const pictureName = this.props.pictureName;
        console.log(pictureName);
        return (
            <Card style={styles.container}>
                <CardImage 
                // title={this.props.cardTitle}
                source={pictureName} 
                resizeMode='contain'
                style={{backgroundColor : 'white'}}
                />
                <Text style={{fontSize : 16,marginLeft : 10}}>Weight</Text>
                <View style={styles.bottom}>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={null}
                        value={'0kg'}
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
