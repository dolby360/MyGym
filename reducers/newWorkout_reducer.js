
const initialState = {
    workoutName : 'dddd',
    workoutPlan : []
}

addOrRemoveFromList = (item , state) =>{
    let temp = state.workoutPlan;
    const index = temp.findIndex(
        _item => String(_item.id) === String(item.id)
    );
    if(index === -1){
        temp.push(item);
    }else{
        for( var i = 0; i < temp.length; i++){ 
            if ( temp[i].id === item.id) {
                temp.splice(i, 1); 
            }
        }
    }
    return temp;
}

export default reducer = ( state = initialState, action) => {
    switch(action.type){
        case 'NEW_WORKOUT':
            break;
        case 'NEW_WORKOUT_NAME':
            state = { ...state, workoutName : action.payload }
            break;
        case 'ADD_OR_REMOVE_EXERCISE_FROM_WORKOUT_PLAN':
            let newList = addOrRemoveFromList(action.payload , state);
            state = { ...state, workoutPlan : newList }
            break;
        case 'CLEAR_WORKOUT_PLAN':
            state = { ...state, workoutName : '' }
            state = { ...state, workoutPlan : [] }
            break;
    }
    return state;
}