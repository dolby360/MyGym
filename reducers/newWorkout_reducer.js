
const initialState = {
    workoutName : 'dddd',
    workoutPlan : [],
    updateCustomPlanInMainScreen : false
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
        case 'CUSTOM_PLAN':
            () => alert('sss');
            state = { ...state, customWorkoutPlan : action.payload }
            break;
        case 'UPDATE_LIST_OF_ALL_CUSTOM_PLANS':
            state = { ...state, allCustomPlansData : action.payload  }
            // console.log('UPDATE_LIST_OF_ALL_CUSTOM_PLANS')
            // console.log(state.allCustomPlansData)
            break; 
        case 'UPDATE_LAST_PLAN_USED':
            state = { ...state, lastPlanUsed : action.payload  }
            break;
    }
    return state;
}