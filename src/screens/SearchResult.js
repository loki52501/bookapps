import React ,{useState} from 'react';
import { FlatList, SectionList,SafeAreaView,Text,TextInput,Button, View,StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';
import {ImageSlider,Icon}  from "react-native-image-slider-banner";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native'
import { ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-virtualized-view';
import {useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './styles';

const SearchResult = ({route}) => {
 const { books}=route.params;

 const navigation = useNavigation();

  const onPressRecipe = (item) => {
    navigation.navigate('ViewPdf', { item });
  };
  const MyWeb = (url) => {
    navigation.navigate('PdfReader', { pdfUrl: url });
    }

  
  const renderPdfs = ({ item }) =>(
    <TouchableHighlight 
    underlayColor="transparent"
    onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
      <View style={styles.img_align}>
        <Image style={styles.photo} source={{ uri: item.img }} />
        
        <TouchableHighlight style = {styles.bookmark}
         underlayColor= 'transaparent'
            onPress={() => navigation.navigate("bookmark-outline")}>
                       <Ionicons name="bookmark-outline" size={24} color="black" />
                       
           </TouchableHighlight>
         {/*  <TouchableHighlight style = {{alignSelf:'flex-end',marginRight:5,marginBottom:20}}
            onPress={() => navigation.navigate("bookmark-outline")}>
                       <Ionicons name="information-circle-outline" size={24} color="black" />
                       
  </TouchableHighlight>*/}

           
           </View>
        <Text style={styles.title}>{item.main_title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.pub_year}>{item.pub_year}</Text>
         <View style={{ flexDirection: "row" }}>
    <View style={{marginLeft:8,marginBottom:8}}>
        <Button color='green' title={"read"} onPress={()=>MyWeb(item.url) }/>
        
    </View>
    <View style={{marginLeft:8,marginBottom:8}}>
        <Button title={"details"} onPress={() => onPressRecipe(item)}/>
        
    </View>
</View>
     
      </View>
    </TouchableHighlight>
  );
  return (
    <View>
    {books.length === 0 ? (
      <Text style={stylesb.noBooksText}>No books found for this search query.</Text>
    ) : (
 
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={books} renderItem={renderPdfs} keyExtractor={books.pdfid} />
  
    )}  
    </View>
  



    
    
  );
};

const stylesb = StyleSheet.create({
  noBooksText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});





export default SearchResult;