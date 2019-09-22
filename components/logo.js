import React , {Component} from 'react';
import {Image} from 'react-native';

import Logo from '../img/logo.png';


export default class LogoTitle extends Component{
    render(){
        return(
            <Image
                source={Logo}
                
            />
        );
    }
} 