import React from 'react';
import {View, Text, StyleSheet, Image, Linking, Dimensions, TouchableOpacity} from 'react-native';
import {Navbar} from '../components/Navbar';
import Contimg from '../assets/images/img_contribute.jpg';
import Devimg from '../assets/images/img_developer.jpeg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';


class Contribute extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <View style={styles.container}>
            <Navbar toggleHandler={this.props.navigation.openDrawer} content="Contribute"/>
            <View style={styles.itemContainer}>
               <Image style={styles.image} source={Contimg}></Image>
           </View>  
            <View style={styles.textContainer} >
                <Text style={styles.text}>Anything missing .. ??{'\n'}Write to us at ..... {'\n\n'} kunalmoharkar1700@gmail.com
               </Text>
            </View>
            <View style={styles.devImageContainer} >
               <Image style={styles.devImage} source={Devimg}></Image>
               <View>
                <Text style={styles.devHeadText}>Kunal Moharkar</Text>
                <Text style={styles.devSubText}>              - CSE second year</Text>
                <View style={styles.brandsContainer}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://github.com/KunalMoharkar/")}>
                    <FontAwesomeIcon icon={faGithub} size={32} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://in.linkedin.com/in/kunal-moharkar-31ba49168")}>
                    <FontAwesomeIcon icon={faLinkedin} size={32} color={'blue'} />
                    </TouchableOpacity>
                </View>
               </View>
           </View> 
             <TouchableOpacity style={styles.opensourceContainer} onPress={() => Linking.openURL("https://github.com/KunalMoharkar/compkit")}>
              <FontAwesomeIcon icon={faGithub} size={24} />
              <Text style={styles.opensourceText}> 
              Open sourced at github
             </Text>
             </TouchableOpacity>
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
        textAlign:'center', 
    },
    textContainer:{
        margin:10,
        padding:20,
    },
    itemContainer:{
        
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:Math.round(Dimensions.get('window').width), 

    },
    image:{
        height:300,
        width:Math.round(Dimensions.get('window').width),
        resizeMode:'cover',
        borderRadius:4,
        
        
    },

    devImageContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },

    devImage:{
        height:120,
        width:120,
        borderRadius:60,
        resizeMode:'cover',
    },
    devHeadText:{
        fontSize:25,
    },
    devSubText:{
        fontSize:15,
    },
    brandsContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:2,
    },
    opensourceContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        padding:4,
    },
    opensourceText:{
        color:'blue',
    }
})

export default Contribute