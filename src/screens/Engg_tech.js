import React, { useLayoutEffect } from "react";
import { FlatList, Text, View,Linking , SafeAreaView,TouchableHighlight, Dimensions,StyleSheet,Pressable ,Image } from "react-native";
import { WebView } from 'react-native-webview';
import styles from "./styles";
import { pdfs } from "../data/ERes_data";
import { Flex } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from "react";
import { useEffect } from "react";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";
import { Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Engineering(props) {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://aulib-books.onrender.com/book");
    const data = await resp.json();
    const filteredData = data.books.filter(item => item.type === 'engineering')
    setData(filteredData);
    console.log(filteredData)

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




  const renderPdfs = ({ item }) =>(
    <TouchableHighlight 
    underlayColor="transparent"
    onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
      <View style={styles.img_align}>
        <Image style={styles.photo} source={{ uri: item.img }} />
        
       
         {/*  <TouchableHighlight style = {{alignSelf:'flex-end',marginRight:5,marginBottom:20}}
            onPress={() => navigation.navigate("bookmark-outline")}>
                       <Ionicons name="information-circle-outline" size={24} color="black" />
                       
  </TouchableHighlight>*/}

           
           </View>
        <Text style={styles.title} numberOfLines={2}>{item.main_title}</Text>
        <Text style={styles.author}numberOfLines={1}>{item.author}</Text>
     
         <View style={{ flexDirection: "row" }}>
         <Stack fill center spacing={1}>
    <Button
      variant="outlined"
      title="Read"
      leading={props => <Icon name="read" {...props} />}
      onPress={()=>MyWeb(item.url)}
    />
    <Button variant="outlined"
     title="Details" trailing={props => <Icon name="arrow-right-circle-outline" {...props} />}
     onPress={() => onPressRecipe(item)} />
  </Stack>
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
