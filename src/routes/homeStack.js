import React from 'react';
import {View,Text,Image,TouchableOpacity,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList, } from '@react-navigation/drawer';
import Header  from '../components/Header';

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
            <Text>John Doe</Text>
            <Text>example@email.com</Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
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
        
        headerTitle: () => <Header name="Welcome" />,
        headerStyle: {
          backgroundColor: '#8cb05a',
          height: 130,
        },
        
        headerRight: () => (
            
            <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}>
                       <Ionicons name="notifications" size={24} color="black" />
                       
                       
           </TouchableOpacity>
           

            
          ),

                       
         
          
      }}
      />
        <Drawer.Screen name="ReviewDetails" component={ReviewDetails}
        options={{
            headerTitle: () => <Header name="ReviewDetails" />,
            headerStyle: {
              backgroundColor: 'pink',
              height: 130,
            },
            headerRight: () => (
            
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#00cc00"
                />
              ),
            
          }} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;