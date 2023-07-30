import React, { Component } from 'react';
import { FlatList,Text, View,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation, useRoute } from "@react-navigation/native"
import { Linking } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useState } from 'react';
const { StorageAccessFramework } = FileSystem;
import ProgressCircle from 'react-native-progress/Circle';



export default function ViewPdf() {
  const [downloadProgress, setDownloadProgress] = useState();

  const downloadPath = FileSystem.documentDirectory + (Platform.OS == 'android' ? '' : '');
const navigation =useNavigation();
  const route = useRoute()
  const item = route.params?.item
  const ensureDirAsync = async (dir, intermediates = true) => {
    const props = await FileSystem.getInfoAsync(dir)
    if (props.exist && props.isDirectory) {
        return props;
    }

    let _ = await FileSystem.makeDirectoryAsync(dir, { intermediates })
    return await ensureDirAsync(dir, intermediates)
  }
  
  const downloadCallback = downloadProgress => {
    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
  };
  

  const saveAndroidFile = async (fileUri, fileName = item['main_title']) => {
    try {
      const fileString = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
      
      const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (!permissions.granted) {
        return;
      }
  
      try {
        await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'application/pdf')
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, fileString, { encoding: FileSystem.EncodingType.Base64 });
            alert('Report Downloaded Successfully')
          })
          .catch((e) => {
          });
      } catch (e) {
        throw new Error(e);
      }
  
    } catch (err) {
    }
  }
  const downloadFile = async (fileUrl) => {
    console.log('entered downloadfile')
    console.log(downloadPath)
    if (Platform.OS == 'android') {
      const dir = ensureDirAsync(downloadPath);
    }

    let fileName = item['main_title'];
    //alert(fileName)
    const downloadResumable =FileSystem.createDownloadResumable(
      fileUrl,
      downloadPath + fileName,
      {},
      downloadCallback
    );
    
    try {

      const { uri } = await downloadResumable.downloadAsync();
      console.log('hi')
      console.log(uri+fileName)
      if (Platform.OS == 'android')
        saveAndroidFile(uri, fileName)
    } catch (e) {
      console.error('download error:', e);
    }
  }
  
  const MyWeb = (url) => {
    navigation.navigate('PdfReader', { pdfUrl: url });
    }

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
                <Text style={{ color: 'white',fontWeight:'bold',fontSize:17,marginTop:5 }}  onPress={async () => {
    const url = item.url
    console.log('entered download');
   downloadFile(url)
    }}>Download</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity>
              <View style={{
                flexDirection:'row',
                  backgroundColor: '#74c967',
                  alignSelf: 'flex-end', 
                  marginLeft:19,
                  width: 130,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 15
                }}
              >
                <Ionicons name="book-outline" size={24} color="white" style = {{fontWeight:'bold',marginRight:12 ,marginTop:5}} />
                <Text style={{ color: 'white',fontWeight:'bold',fontSize:17,marginTop:5,marginRight:14 }} onPress={()=>MyWeb(item.url)}>Read</Text>
              </View>
            </TouchableOpacity>

            </View>
              <View style={styles.container}>
              <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Title</Text>
              <Text style = {{marginTop:10,marginLeft: 70,fontSize:18, fontWeight:'normal'}}> {item.main_title}</Text>           
              </View>
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
              <Text style = {{marginTop:10,marginLeft: 60,fontSize:18, fontWeight:'normal'}}> {item.lan}</Text>           
              </View>

              <View style = {{flexDirection: 'column'}}>
              <Text style = {{marginTop:10,alignContent:'flex-start',marginLeft:40,fontSize:18, fontWeight:'normal',color:'grey'}}>
                Description</Text>
              <Text style = {{marginTop:10,marginLeft: 70,fontSize:18, fontWeight:'normal'}}> {item.descr}</Text>           
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
    

  
  },
    
    progressText: {
      fontSize: 16,
      marginTop: 10,
    },
  });
  
  

