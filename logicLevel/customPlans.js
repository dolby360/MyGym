
import React ,{Component}  from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const getAllCustomData = async () =>{
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch(e) {
        // read key error
    }
    console.log(keys);
    let ret = [];
    let value;
    for(let i = 0; i < keys.length; i++){
        console.log('--->>>>>>>>>>>')
        console.log(keys[i].substring(0,2))
        if(keys[i].substring(0,2) == '@#'){
            value = {
                id : String(i + 10),
                name : keys[i].substring(2,keys[i].length),
            }
            console.log('----------->')
            console.log(value)
            ret.push(value);
        }
    }    
    return ret;
}
