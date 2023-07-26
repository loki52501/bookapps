import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class EJournals extends Component {
   static   navigationOptions = {
      drawerLabel: 'SecondScreen Name',
    }
    render() {
      return (
          <View style={{flex:1,flexDirection:'column',}}>
          
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           <Text>2 Screen......!</Text>
         </View>
         </View>
        
      );
    }
};
