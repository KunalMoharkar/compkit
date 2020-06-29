import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {Navbar} from '../components/Navbar';
import Homeimg from '../assets/images/img_home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={styles.container}>
                 <Navbar toggleHandler={this.props.navigation.openDrawer} content="Home"/>
                 <View style={styles.itemContainer}>
                    <Image style={styles.image} source={Homeimg}></Image>
                </View>  
                 <View style={styles.textContainer} >
                     <Text style={styles.text}>Compkit is collection of trending technologies and tools in the field of Computer Science
                    .Competitive Coding websites, Web devlopment frameworks , Mobile Development , Databases,Editors, 
                      plugins and useful tools have been covered .It also has an interesting Quotes section 
                     and resourceful git repositories.{'\n'}Hope you Enjoy ..... {'\n\n'}   <FontAwesomeIcon icon={faSmile} color={'orange'} size={40} />
                    </Text>
                 </View>
            </View>
        )
    }

}

const styles =  StyleSheet.create({
    container:{
        display:'flex',
        flex:1,    
    },
    text:{
        fontSize:20,   
        color:'gray',
        fontWeight:'bold',
        textAlign:'justify', 
    },
    textContainer:{
        margin:10,
        padding:20,
    },
    itemContainer:{
        
        width:Math.round(Dimensions.get('window').width), 

    },
    image:{
        height:300,
        width:Math.round(Dimensions.get('window').width),
        resizeMode:'cover',
        
    },
})

export default Home;


