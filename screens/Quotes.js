import React from 'react';
import {FlatList, Text , View, StyleSheet, SafeAreaView} from 'react-native';
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
        
      const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/page/2');
      const json = await response.json();
      this.setState({ data: json });
  
      }

    
    render(){
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            ListHeaderComponent = {Header}
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
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor:'#303133',
    },
    item: {
      backgroundColor: 'black',
      padding: 10,
      borderBottomColor:'#d6156c',
      borderBottomWidth:2,
      marginTop:8,
      marginBottom:8,
      marginLeft:2,
      marginRight:2,

    },
    title: {
      fontSize: 18,
      color:'white',
    },
  });
  
  export default Quotes;