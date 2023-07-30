import React, { useLayoutEffect } from "react";
import { FlatList, Text, View,Linking , SafeAreaView,TouchableHighlight, Dimensions,StyleSheet,Pressable ,Image ,Button} from "react-native";
import { WebView } from 'react-native-webview';
import styles from "./styles";
import { pdfs } from "../data/ERes_data";
import { Flex } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from "react";
import { useEffect } from "react";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";


export default function Literature(props) {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://aulib-books.onrender.com/book");
    const data = await resp.json();
    console.log(data)
    setData(data.books);

  };
console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  const MyWeb = (url) => {
    navigation.navigate('PdfReader', { pdfUrl: url });
    }




  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("ViewPdf", { item });
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
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderPdfs} keyExtractor={data.pdfid} />
    </View>
  );
}
const pdfstyles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});