import React , {Component} from 'react';
import { StyleSheet ,View , Image, TouchableOpacity,FlatList} from 'react-native';
import { TextField } from 'react-native-material-textfield';

fieldRef = React.createRef();

onSubmit = () => {
    let { current: field } = this.fieldRef;
    alert(field.value());
};

getExercise = (props) => {
    return (
        <View>
            <Exercises
                exercisesName={props.item.name} 
                pictureName={props.item.req}/>
        </View>
    );
}

export default WorkoutField = (props) => {
    return(
        <View style={styles.container}>
            <TextField
                label='Workout name'
                labelFontSize={16}
                keyboardType='default'
                onSubmitEditing={this.onSubmit}
                ref={this.fieldRef}
                containerStyle={styles.textView}
            />
        </View>
    );
} 


const styles = StyleSheet.create({
    image : {
        height : 40, 
        width :40,
        marginLeft : 10,
    },
    textView :{
        width : '70%',
        // alignSelf : 'center',
        margin : '5%'
        // backgroundColor: 'rgba(255,255,255,.6)'
    },
    container:{
        flexDirection : 'column',
        justifyContent : 'center',
    },
});
