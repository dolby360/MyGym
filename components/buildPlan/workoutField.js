import React , {Component} from 'react';
import { StyleSheet ,View , Image, TouchableOpacity,FlatList} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux'

class WorkoutField extends Component {
    constructor(props) {
      super(props);
      state = {
      }
      this.fieldRef = React.createRef();
    }

    onSubmit = () => {
        let { current: field } = this.fieldRef;
        // alert(field.value());
        this.props.setWorkoutName(field.value());
        // alert(this.props.workoutName);
    };


    render() {
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
}
function mapStateToProps(state) {
    return {
        workoutName : state.workoutName,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setWorkoutName: (text) => dispatch({ type: 'NEW_WORKOUT_NAME' , payload : text})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutField)

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
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
    },
});
