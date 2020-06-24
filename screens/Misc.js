import React from 'react';
import {StyleSheet, Image, SafeAreaView, Dimensions} from 'react-native';
import {MiscList} from '../data/Misc'
import {HorizontalList} from '../components/ListComponents'
import {Navbar} from '../components/Navbar';

class Misc extends React.Component{

    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <SafeAreaView style={styles.container}>
                <Navbar toggleHandler={this.props.navigation.openDrawer} content="Miscellaneous"/>  
               <HorizontalList data={MiscList}/>
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




export default Misc;