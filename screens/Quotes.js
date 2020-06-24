import React from 'react';
import {FlatList, Text , View, StyleSheet, SafeAreaView} from 'react-native';
import {Navbar} from '../components/Navbar';
import Constants from 'expo-constants';

 const Item=({title})=>{
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

 }

 const Header = ()=>{
    return(
        <View><Text>Header</Text></View>
    )
 }

class Quotes extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }

     async componentDidMount() {
        
      const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes');
      const json = await response.json();
      this.setState({ data: json });
  
      }

    
    render(){
    return (
        <SafeAreaView style={styles.container}>
          <Navbar toggleHandler={this.props.navigation.openDrawer} content="Quotes"/>  
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Item title={item.en} />}
            keyExtractor={item => item.id}

          />
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      display:'flex',
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },
    item: {
      backgroundColor: '#c1c3c7',
      padding: 10,
      borderBottomColor:'#7d8085',
      borderRadius:3,
      borderBottomWidth:5,
      marginTop:8,
      marginBottom:8,
      marginLeft:2,
      marginRight:2,
    },
    title: {
      fontSize: 18,
    },
  });
  
  export default Quotes;