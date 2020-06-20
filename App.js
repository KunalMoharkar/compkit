import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Quotes from './screens/Quotes';
import Competitive from './screens/Competitive';
import Frontend from './screens/Frontend';
import Backend from './screens/Backend';
import Appdev from './screens/Appdev';
import Database from './screens/Database';
import Editors from './screens/Editors';
import Ide from './screens/Ide';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
      
        title="Home"
      />
    </View>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home"
      hideStatusBar="true"
      drawerStyle={{
        backgroundColor: 'black',
        width:240
      }}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'white',
        labelStyle:{
          fontSize:20,
        }
      }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Quotes" component={Quotes} />
        <Drawer.Screen name="Competitive" component={Competitive}/>
        <Drawer.Screen name="Backend" component={Backend}/>
        <Drawer.Screen name="Frontend" component={Frontend}/>
        <Drawer.Screen name="Mobile" component={Appdev}/>
        <Drawer.Screen name="Database" component={Database}/>
        <Drawer.Screen name="Editors" component={Editors}/>
        <Drawer.Screen name="IDE" component={Ide}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}