import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

import Navigator from './src/routes/homeStack';
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList, } from '@react-navigation/drawer';


import Header  from './src/components/Header';
import Onboarding from './src/screens/Onboarding';
import Signup from './src/Sign_up&Sign_in/Signup';
import Login from './src/Sign_up&Sign_in/Login'
import FirstScreen from './src/screens/FirstScreen';
import Home from './src/screens/Home'
import Notifications from './src/screens/Notifications';
import EResources from './src/screens/EResources'
import EJournals from './src/screens/EJournals';
import Arts_Sci from './src/screens/Arts_Sci';
import Engg_tech from './src/screens/Engg_tech';
import Competitive_Exam from './src/screens/Comp_Exam';
import Literature from './src/screens/Literature';
import ViewPdf from './src/screens/ViewPdf';
import DrawerNavigator from './src/routes/homeStack';
import InternalStack from './src/routes/InternalStack';
import PdfReader from './src/screens/PdfReader';
import { SearchProvider } from './src/screens/SearchContext';
import SearchResult from './src/screens/SearchResult';

  const Stack = createStackNavigator();



export default function App() {
  return (
<SearchProvider>
    <NavigationContainer>
   <Stack.Navigator> 
   <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EResources"
      component={EResources}
      options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}
    />
      <Stack.Screen
      name="Notifications"
      component={Notifications}
    
    />
<Stack.Screen name="Engineering" component={Engg_tech}  options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}/>
<Stack.Screen
      name="EJournals"
      component={EJournals}
      options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}
    
    />
    <Stack.Screen
      name="Arts_Sci"
      component={Arts_Sci}
      options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}
    />
    <Stack.Screen
      name="Competitive_Exam"
      component={Competitive_Exam}
      options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}
    />

    <Stack.Screen
      name="Literature"
      component={Literature}
      options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}
    />
     <Stack.Screen
      name="ViewPdf"
      component={ViewPdf}
      options={{  headerStyle: {
        backgroundColor: '#64CCC9'
     } }}
    />
         <Stack.Screen
      name="PdfReader"
      component={PdfReader}
      options={({ route }) => ({
        pdfUrl: route.params.pdfUrl,
        headerStyle: {
          backgroundColor: '#64CCC9',
        },
      })}  />
      <Stack.Screen
      name="SearchResult"
      component={SearchResult}
      options={({ route }) => ({
        books: route.params.books,
        headerStyle: {
          backgroundColor: '#64CCC9',
        },
      })}
    />
        </Stack.Navigator>
  
      </NavigationContainer>
      </SearchProvider>
  );
    {/*  
 <>
  <StatusBar style="dark" />
        { /*<AppStack.Navigator >
          
          <AppStack.Screen name="Onboarding" component={Onboarding} />
         
  <AppStack.Screen name="Login" component={Login} />
          
        </AppStack.Navigator>
       </>
        <Stack.Navigator> 
    <Stack.Screen name="Onboarding" component={Onboarding} options = {{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup}options={{ headerShown: false }} />
          <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EResources"
      component={EResources}
    
    />
      <Stack.Screen
      name="Notifications"
      component={Notifications}
    
    />

<Stack.Screen
      name="EJournals"
      component={EJournals}
    
    />
    <Stack.Screen
      name="Arts_Sci"
      component={Arts_Sci}
      
    />
    <Stack.Screen
      name="Comp_Exam"
      component={Comp_Exam}
  
    />
    <Stack.Screen
      name="Engg_tech"
      component={Engg_tech}
      
    />
    <Stack.Screen
      name="Literature"
      component={Literature}
    
    />
     <Stack.Screen
      name="ViewPdf"
      component={ViewPdf}
     
    />

        </Stack.Navigator>
  
      </NavigationContainer>*/ }
    
}