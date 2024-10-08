import React from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfReader = ({ route }) => {
  const { pdfUrl } = route.params;
console.log('entered',pdfUrl)
const source = { uri: pdfUrl, cache: true };
  return (
    <View style={pdfstyles.container}>
    <Pdf    trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
            console.log(error);
        }}
        onPressLink={(pdfurl) => {
            console.log(`Link pressed: ${pdfurl}`);
        }}
        style={pdfstyles.pdf}/>
</View>
  );
};

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
export default PdfReader;