import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import Constants from 'expo-constants';

export const Navbar=(props)=>{
    return(
        <View style={styles.container}>
            <View>
                 <Text style={styles.text}>{props.content}</Text>
            </View>
            <TouchableOpacity onPress={props.toggleHandler} style={styles.iconContainer}>
       
                 <FontAwesomeIcon icon={faBars} color={'crimson'} size={40}/>
            </TouchableOpacity>
        </View>    
    )
}

const styles = StyleSheet.create({

    text:{
        color:'#e91e63',
        fontSize:30,
        fontFamily:'Roboto',
    },
    container:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'stretch',
        justifyContent:'space-between',
        backgroundColor:'black',
        padding:5,
    },
    iconContainer:{
        display:'flex',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
    },

})