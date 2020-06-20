import React from 'react';
import {Text, View, Button, FlatList, StyleSheet, Image, SafeAreaView, Dimensions} from 'react-native';
import {IdeList} from '../data/Ide'
import {HorizontalList} from '../components/ListComponents';
import {Navbar} from '../components/Navbar';


class Ide extends React.Component{

    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <SafeAreaView style={styles.container}>
               <Navbar toggleHandler={this.props.navigation.openDrawer} content="IDE"/>     
               <HorizontalList data={IdeList}/>
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




export default Ide;