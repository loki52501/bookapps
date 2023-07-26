import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class ReviewDetails extends Component {
   static   navigationOptions = {
      drawerLabel: 'SecondScreen Name',
    }
    render() {
      return (
          <View style={{flex:1,flexDirection:'column',}}>
          
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           <Text>Second Screen......!</Text>
         </View>
         </View>
        
      );
    }
};
