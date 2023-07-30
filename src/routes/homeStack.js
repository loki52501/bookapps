import React from 'react';
import {View,Text,Image,TouchableOpacity,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList, } from '@react-navigation/drawer';
import Header  from '../components/Header';
import { Center } from 'native-base';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text>CEGLibrary</Text>
 
          </View>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/p/AF1QipOlhq74gGkZ6DSBQVEic9azLnexXcsr-oy5Da3o=s1360-w1360-h1020',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

    </View>
  );
};

function DrawerNavigator () {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} 

      options={{
        
        headerTitle: () => <Header  name="       AU Library" />,
        headerStyle: {
          backgroundColor: '#64CCC9',
          height: 80,
        },
        
        headerRight: () => (
            
            <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}>
                       <Ionicons name="notifications" size={24} color="black" />
                       
                       
           </TouchableOpacity>
           

            
          ),

                       
         
          
      }}
      />
    
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;