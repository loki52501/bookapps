import React ,{useState} from 'react';
import { FlatList, SectionList,SafeAreaView,Text, View,StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';
import {ImageSlider,Icon}  from "react-native-image-slider-banner";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native'
import { ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-virtualized-view';
import {useEffect } from 'react';
import Arts_Sci from '../screens/Arts_Sci';
import Comp_Exam from '../screens/Comp_Exam';
import Engg_tech from '../screens/Engg_tech';
import ReviewDetails from '../screens/ReviewDetails'
import EResources from './EResources';
import EJournals from './EJournals';
import InternalStack from '../routes/InternalStack';
import FirstScreen from './FirstScreen';
import Literature from './Literature';
const Stack = createStackNavigator();

const Home = props => {
  const [searchText, setSearchText] = useState('');
  const [datas, setDatas] = useState([]);
  
  
  const fetchData = async () => {
    const resp = await fetch("https://aulib-books.onrender.com/book");
    const datat = await resp.json();
    console.log(datat)
    setDatas(datat.books);

  };
  useEffect(() => {
    fetchData();
  }, [searchText]);


  const ImageSlide = () => {
    return(
        
     
      <View>
       <ImageSlider 
    data={[
        {img: 'https://images.indianexpress.com/2019/01/anna-university-1200.jpg'},
        {img: 'https://mitindia.edu/Mit_Codes_custom/MIT_banner/img/landscape/01.jpg'},
        {img: 'https://www.annauniv.edu/act/images/ACTECH.jpg'},
    ]}
    autoPlay={true}
    closeIconColor="#fff"
/></View>

    )
  };
  const Data_Res = [
    {
      id: '1',
      title: 'E-Resources',
      screen: EResources,
      img : require('../../assets/eres.jpeg')
    },
    {
      id: '2',
      title: 'E-journals',
      screen: EJournals,
      img:require('../../assets/ejour.jpeg')
    },
  ];
  const Data_Cat = [
    {
      id: '1',
      title: 'Literature',
      screen: Literature,
      img : require('../../assets/lit.jpeg')
    },
    {
      id: '2',
      title: 'Engg and Tech',
      screen : Engg_tech,
      img: require('../../assets/enggtech.jpeg')
    },
    {
      id: '3',
      title: 'Arts and Science',
      screen : Arts_Sci,
      img : require('../../assets/Arts_sci.jpeg')
    },
    {
      id: '4',
      title: 'Competitive Exams',
      screen: Comp_Exam,
      img: require('../../assets/compexam.jpeg')
    },
  ];


  const navigation = useNavigation();

  const Details = () =>{
    return (
   
    <View style={styles.container}>
    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>
      Resources .. 
    </Text>
    <View style={styles.container}>
    <FlatList
          data={Data_Res}
          numColumns = {2}
          renderItem={({item}) => (
         
         
         
            
              <TouchableOpacity
                onPress= {() => {navigation.navigate(item.screen,{name: 'book'})}}
                style={{
                  height: 200,
                  width: 150,
                 backgroundColor:'lightgrey',
                  margin: 10
                }}
              >
                 {/*{console.log(item.screen())}*/}
                <Image
              source={item.img}
              style = {{
                height:160,
                width:130, 
                margin:10
              }}
              />
              <Text  style = {{alignContent:'center'}}>
              {item.title}
              </Text>
              </TouchableOpacity>
               
               
          )}
        />
  
      </View>
    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>
      Categories .. 
    </Text>
    <View style={styles.container}>
    <FlatList
    numColumns={2}
          data={Data_Cat}
          
          renderItem={({item}) => (
         
         
            <TouchableOpacity
            onPress= {() => {navigation.navigate(item.screen,{name: 'book'})}}
              style={{
                height: 200,
                width: 150,
                backgroundColor: "gold",
                margin: 10
              }}>
                <Image
                style = {{
                  height:160,
                  width:130, 
                  margin:10
                }}
              source={item.img}
              />
              <Text  style = {{alignContent:'center'}}>
              {item.title}
              </Text>
              </TouchableOpacity>
               

               
          )}
        />
  
      </View>
    
    </View>
   
    )
  };
  

  
  return (
    
     
   
    <ScrollView>
        <View >
    <SearchBar
        placeholder="Type Here..."
        onChangeText={text=>{setSearchText(text);}}
        value={searchText}
      />
      <ImageSlide/>

    <Details/>

</View>
</ScrollView>
    
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',

  
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




export default Home;