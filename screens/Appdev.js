import React from 'react';
import {Text, View, Button, FlatList, StyleSheet, Image, SafeAreaView, Dimensions} from 'react-native';
import {AppList} from '../data/Appdev'
import {HorizontalList} from '../components/ListComponents';
import {Navbar} from '../components/Navbar';

class Appdev extends React.Component{

    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <SafeAreaView style={styles.container}>
                <Navbar toggleHandler={this.props.navigation.openDrawer} content="Mobile"/>
               <HorizontalList data={AppList}/>
            </SafeAreaView>     
            );
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

})

export default Appdev;