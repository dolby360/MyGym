import React , {Component} from 'react';
import { StyleSheet ,View , Image, TouchableOpacity} from 'react-native';

import Menu from '../img/menu.png'

export default Header = (props) => {
    return(
        <View 
        style={styles.container}>
            <View style={styles.image}>
                <TouchableOpacity onPress={()=>props.toggleDrawer()}>
                    <Image 
                        style ={styles.image}
                        source={Menu} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
} 


const styles = StyleSheet.create({
    image : {
        height : 40, 
        width :40,
        marginLeft : '5%',
        marginTop : '5%'
    },
    container:{
        // flex : 1,
        // justifyContent : 'flex-start',
        height : 60,
        width : '100%',
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor: 'rgba(255,255,255,.6)'
    },
});
