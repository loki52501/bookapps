import React, { Component } from 'react';
import { FlatList,Text, View,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRoute } from "@react-navigation/native"


export default function ViewPdf() {
  const route = useRoute()
  const item = route.params?.item
  const InfoBook = () =>(
     
          <View >
          
         <ScrollView>
         <Image
                style = {{
                  height:200,
                  width:150, 
                  marginTop:30,
                  justifyContent:'center',
                  alignSelf:'center'
                }}
              source = {{uri :item.img}}
              
              />
              
                    <Text style = {{fontSize: 21,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#444444',
                marginTop:15,
                marginBottom: 10,}}>{item.Main_title}</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
              <View style={{
                flexDirection:'row',
                  backgroundColor: '#51adcf',
                  alignSelf: 'flex-start', 
                  marginLeft:30,
                  width: 130,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 15
                }}
              >
                <Ionicons name="download-outline" size={24} color="white" style = {{fontWeight:'bold',marginRight:5,marginTop:5}} />
                <Text style={{ color: 'white',fontWeight:'bold',fontSize:17,marginTop:5 }}>Download</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity>
              <View style={{
                flexDirection:'row',
                  backgroundColor: '#74c967',
                  alignSelf: 'flex-end', 
                  marginLeft:100,
                  width: 90,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 15
                }}
              >
                <Ionicons name="book-outline" size={24} color="white" style = {{fontWeight:'bold',marginRight:7 ,marginTop:5}} />
                <Text style={{ color: 'white',fontWeight:'bold',fontSize:17,marginTop:5 }}>Read</Text>
              </View>
            </TouchableOpacity>

            </View>
              <View style={styles.container}>
                <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Subject</Text>
              <Text style = {{marginTop:10,marginLeft: 70,fontSize:18, fontWeight:'normal'}}> {item.sub}</Text>           
              </View>

              <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Author</Text>
              <Text style = {{marginTop:10,marginLeft: 80,fontSize:18, fontWeight:'normal'}}> {item.author}</Text>           
              </View>

              <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Edition</Text>
              <Text style = {{marginTop:10,marginLeft: 80,fontSize:18, fontWeight:'normal'}}> {item.pub_year}</Text>           
              </View>

              <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Publisher</Text>
              <Text style = {{marginTop:10,marginLeft: 60,fontSize:18, fontWeight:'normal'}}> {item.pub}</Text>           
              </View>

              <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Language</Text>
              <Text style = {{marginTop:10,marginLeft: 60,fontSize:18, fontWeight:'normal'}}> {item.Language}</Text>           
              </View>

              <View style = {{flexDirection: 'column'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Description</Text>
              <Text style = {{marginTop:10,marginLeft: 70,fontSize:18, fontWeight:'normal'}}> {item.Description}</Text>           
              </View>

         </View>

         </ScrollView>

        
         </View>
  )
        return ( 
          <InfoBook/>
      );
    }

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor:'white',
    borderColor:'lightgrey',
    borderColor: 'grey',
    borderWidth: 0.8,
    borderRadius: 15,
    width: 350,
    alignSelf:'center'
    

  
  }
})
