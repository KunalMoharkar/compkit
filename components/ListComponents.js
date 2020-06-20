import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Image} from 'react-native';

const HorizontalListItem=(props)=>{

    return(
    <View style={styles.itemContainer}>
        <Image style={styles.image} source={props.data.source}></Image>
        <Text style={styles.imageText}>{props.data.name}</Text>
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
        borderRadius:10,
        elevation:24,
        shadowOffset: { width:2 , height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius:20,
        elevation: 6,
    },
    image:{
        height:250,
        width:250,
        resizeMode:'contain',
        
    },
    imageText:{
        fontSize:40,
        fontFamily:'monospace',
    }
})
