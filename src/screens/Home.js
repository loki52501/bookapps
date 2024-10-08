import React ,{useState} from 'react';
import { FlatList, SectionList,SafeAreaView,Text, View,StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';
import {ImageSlider,Icon}  from "react-native-image-slider-banner";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native'
import { ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-virtualized-view';
import Searchbar from './Searchbar';
import Arts_Sci from '../screens/Arts_Sci';
import Competitive_Exam from '../screens/Comp_Exam';
import Engineering from '../screens/Engg_tech';
import ReviewDetails from '../screens/ReviewDetails'
import EResources from './EResources';
import EJournals from './EJournals';
import InternalStack from '../routes/InternalStack';
import FirstScreen from './FirstScreen';
import { useEffect } from 'react';
import Literature from './Literature';
import { Ionicons } from '@expo/vector-icons';
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
  }, []);


  const ImageSlide = () => {
    return(
        
     
      <View style={{backgroundColor:'#B7DDE1'}}>
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
      title: 'Eng and Tech',
      screen : Engineering,
      img: require('../../assets/enggtech.jpeg')
    },
    {
      id: '3',
      title: 'Arts & Science',
      screen : Arts_Sci,
      img : require('../../assets/Arts_sci.jpeg')
    },
    {
      id: '4',
      title: 'Entrance Exam',
      screen: Competitive_Exam,
      img: require('../../assets/compexam.jpeg')
    },
  ];


  const navigation = useNavigation();

  const Details = () =>{
    return (
   
    <View style={styles.container}>
    <Text style={{fontWeight:'bold', fontSize:20, color:'#0E2954',marginTop:'5%'}}>
      Resources
    </Text>
    <View style={styles.container}>
    <FlatList
          data={Data_Res}
          numColumns = {2}
          renderItem={({item}) => (
         
         
         
            
              <TouchableOpacity
                onPress= {() => {navigation.navigate(item.screen,{name: 'book'})}}
                style={{
                  height: 100,
                  width: 100,
                 backgroundColor:'#64CCC9',
                  margin: 40,
                 
                  marginRight:50
                }}
              >
                 {/*{console.log(item.screen())}*/}
                <Image
              source={item.img}
              style = {{
                height:100,
                width:100, 
                margin:10,
              }}
              />
              <Text  style = {{alignContent:'center',color:'#13294B'}}>
              {item.title}
              </Text>
              </TouchableOpacity>
               
               
          )}
        />
  
      </View>
    <Text style={{fontWeight:'bold', fontSize:20, color:'#0E2954',marginTop:40,marginBottom:'1%'}}>
 
      Categories
    </Text>
    <View style={styles.container}>
    <FlatList
    numColumns={2}
          data={Data_Cat}
          
          renderItem={({item}) => (
         
         
            <TouchableOpacity
            onPress= {() => {navigation.navigate(item.screen,{name: item.title})}}
              style={{
                height: 100,
                width: 100,
               backgroundColor:'#64CCC9',
                margin: 40,
                marginRight:50,
             
              }}>
                <Image
                style = {{
                  height:100,
                width:100, 
                margin:10
                }}
              source={item.img}
              />
              <Text  style = {{alignContent:'center',color:'#13294B'}}>
              {item.title}
              </Text>
              </TouchableOpacity>
               

               
          )}
        />
  
      </View>
    <View style={{height:20}}></View>
    </View>
   
    )
  };
  

  
  return (
    
     
   
    <ScrollView>
        <View >
    <Searchbar book={datas} />
      <ImageSlide/>

    <Details/>

</View>
</ScrollView>
    
    
  );
};





const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#E6FFFD',
    justifyContent: 'center',
    alignItems: 'center',


  
  },
  button: {
    padding: 40,
    borderRadius: 4,
    backgroundColor: '#4AC9E3',
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