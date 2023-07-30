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
import { useSearch } from './SearchContext';
import { Feather } from '@expo/vector-icons';
const Searchbar = props => {
  console.log('searchbar',props.book)
  const books=props.book;
  const navigation = useNavigation();
  const { searchText, setSearchText } = useSearch();
  const [showSearchResults, setShowSearchResults] = useState(false);




  const handleSearchButtonPress = () => {

    setShowSearchResults(true);
 
    const filteredBooks =books.filter((book) =>
     book.main_title.toLowerCase().includes(searchText.toLowerCase())
    );   
    console.log("searchbutton",searchText,filteredBooks)
  navigation.navigate('SearchResult',{books:filteredBooks}) 

    
  
 
  };



  const renderPdfs = ({ item }) => (
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
    <View style={styles.container} >
      {console.log('got it)',showSearchResults)}
      
              <TextInput
           style={styles.searchInput}
            placeholder="Search for books..."
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={handleSearchButtonPress} // Handle the search button press
            value={searchText}
          />
          <TouchableOpacity onPress={handleSearchButtonPress} style={styles.searchIconContainer}>
        <Feather name="search" size={24} color="black"  />
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#B7DDE1',
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    backgroundColor:'#64CCC9',
    height: 40,
    borderColor:'black'
  },

  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    backgroundColor: '#F88',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },

  
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});




export default Searchbar;