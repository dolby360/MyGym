
const exercisesPath = '../img/Exercises/';

const Barbell_Bench_Press = {
    req :require(exercisesPath + 'Barbell_Bench_Press'               + '.jpg'),
    name    : 'Barbell Bench Press',
    id : '0',
    part : 'chest'
}
const Barbell_Back_Squat = {
    req :require(exercisesPath + 'Barbell_Back_Squat'                + '.jpg'),
    name    : 'Barbell Back Squat',
    id : '1',
    part : 'legs'
}
const Pull_Ups = {
    req :require(exercisesPath + 'Pull_Ups'                          + '.jpg'),
    name    :'Pull Ups',
    id : '2',
    part : 'back'
}
const Lying_Dumbbell_Hamstring_Curls = {
    req :require(exercisesPath + 'Lying_Dumbbell_Hamstring_Curls'    + '.jpg'),
    name    :'Lying Dumbbell Hamstring Curls',
    id : '3',
    part : 'legs'
}
const Standing_Overhead_Press = {
    req :require(exercisesPath + 'Standing_Overhead_Press'           + '.jpg'),
    name    :'Standing Overhead Press',
    id : '4',
    part : 'shoulders'
}
const Face_Pulls = {
    req :require(exercisesPath + 'Face_Pulls'                        + '.jpg'),
    name    :'Face Pulls',
    id : '5',
    part : 'back'
}
const Drag_Curls = {
    req :require(exercisesPath + 'Drag_Curls'                        + '.jpg'),
    name    :'Drag Curls',
    id : '6',
    part : 'biceps'
}
const Barbell_Deadlift = {
    req :require(exercisesPath + 'Barbell_Deadlift'               + '.jpg'),
    name    : 'Barbell Deadlift',
    id : '7',
    part : 'back'
}
const Incline_Dumbbell_Press = {
    req :require(exercisesPath + 'Incline_Dumbbell_Press'                + '.jpg'),
    name    : 'Incline Dumbbell Press',
    id : '8',
    part : 'chest'
}
const Chest_Supported_Row = {
    req :require(exercisesPath + 'Chest_Supported_Row'                          + '.jpg'),
    name    :'Chest Supported Row',
    id : '9',
    part : 'back'
}
const Bulgarian_Split_Squat = {
    req :require(exercisesPath + 'Bulgarian_Split_Squat'    + '.jpg'),
    name    :'Bulgarian Split Squat',
    id : '10',
    part : 'legs'
}
const Dumbbell_Lateral_Raises = {
    req :require(exercisesPath + 'Dumbbell_Lateral_Raises'           + '.jpg'),
    name    :'Dumbbell Lateral Raises',
    id : '11',
    part : 'shoulders'
}
const Incline_Dumbbell_Kickbacks = {
    req :require(exercisesPath + 'Incline_Dumbbell_Kickbacks'       + '.jpg'),
    name    :'Incline Dumbbell Kickbacks',
    id : '12',
    part : 'triceps'
}
const High_to_Low_Cable_Flies = {
    req :require(exercisesPath + 'High_to_Low_Cable_Flies'                        + '.jpg'),
    name    :'High to Low Cable Flies',
    id : '13',
    part : 'chest'
}

const fullBody_A_data = [ Barbell_Bench_Press,Barbell_Back_Squat,Pull_Ups,Lying_Dumbbell_Hamstring_Curls,Standing_Overhead_Press,Face_Pulls,Drag_Curls];
const fullBody_B_data = [ Barbell_Deadlift,Incline_Dumbbell_Press,Chest_Supported_Row,Bulgarian_Split_Squat,Dumbbell_Lateral_Raises,Incline_Dumbbell_Kickbacks,High_to_Low_Cable_Flies ];

const allExercises = [
    Barbell_Deadlift,
    Incline_Dumbbell_Press, 
    Chest_Supported_Row,
    Bulgarian_Split_Squat,
    Dumbbell_Lateral_Raises,
    Incline_Dumbbell_Kickbacks,
    High_to_Low_Cable_Flies,
    Barbell_Bench_Press,
    Barbell_Back_Squat,
    Pull_Ups,
    Lying_Dumbbell_Hamstring_Curls,
    Standing_Overhead_Press,
    Face_Pulls,
    Drag_Curls
]

//TODO: need to be refactored I just do it quick and dirty 
const chestWorkout = [Barbell_Bench_Press];

export {fullBody_A_data , fullBody_B_data , allExercises}