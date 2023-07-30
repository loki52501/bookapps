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

  
    const renderPdfs = ({ item }) => (
      <TouchableHighlight style={bookstyles.bookItem}
      underlayColor="transparent"
      onPress={() => onPressRecipe(item)}>
   <View style={bookstyles.bookItem}>
        <View style={bookstyles.imgContainer}>
          <Image style={bookstyles.bookImage} source={{ uri: item.img }} />
         
        </View>
        <View style={bookstyles.infoContainer}>
          <Text style={bookstyles.bookTitle}>{item.main_title}</Text>
          <Text style={bookstyles.bookAuthor}>{item.author}</Text>
          <Text numberOfLines={3} style={bookstyles.bookInfo}>
            {item.description}
          </Text>
          <View style={bookstyles.buttonContainer}>
            <Button color="green" title="Read" onPress={() => MyWeb(item.url)} />
            <Button title="Details" onPress={() => onPressRecipe(item)} />
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
const bookstyles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
  },
  bookInfo: {
    fontSize: 14,
    color: '#999',
  },
  imgContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookImage: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
  },
  bookmark: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
  infoContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#777',
  },
  bookDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});




export default SearchResult;