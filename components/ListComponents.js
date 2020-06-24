import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity,Linking} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const HorizontalListItem=(props)=>{

    return(
    <View>
    <View style={styles.itemContainer}>
        <Image style={styles.image} source={props.data.source}></Image>
    </View>  
    <View style={styles.imageTextContainer}>
        <Text style={styles.imageText}>{props.data.name}</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => Linking.openURL(props.data.url)}><FontAwesomeIcon icon={faExternalLinkAlt} color={'blue'} size={32} /></TouchableOpacity>
    </View>
    </View>
    )  

}

export const HorizontalList=(props)=>{
    return(
        <FlatList
        contentContainerStyle={styles.listContainer}
        data={props.data}
        renderItem={({ item }) => <HorizontalListItem data={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        />
    )
}

const styles = StyleSheet.create({

    listContainer:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:"center",
    },
    itemContainer:{
        
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:Math.round(Dimensions.get('window').width), 
        height:Math.round(Dimensions.get('window').width), 
        marginLeft:10,
        marginRight:10,
        borderRadius:Math.round(Dimensions.get('window').width)/2,
        borderColor:'grey',
        borderTopWidth:0,
        borderBottomWidth:0,
        borderWidth:6,
        backgroundColor:'#d1cbcd',
    },
    image:{
        height:250,
        width:250,
        resizeMode:'contain',
        
    },
    imageTextContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    imageText:{
        fontSize:40,
        fontFamily:'monospace',
    },
    iconContainer:{
        display:'flex',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        paddingLeft:10,
    },
})
