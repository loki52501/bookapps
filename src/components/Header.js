import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
const Header = (props) => {
  return (
    <View style={{flexDirection:'row', margin:15 }}>

      <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>
        {props.name}
      </Text>
        
    </View>
  )
}

export default Header