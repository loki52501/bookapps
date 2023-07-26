import React, { useRef } from 'react';
import { View,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import Page from '../components/Page';
import Footer from '../components/Footer';
import Navigator from '../routes/homeStack'

const Onboarding = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();
  const icon = <FontAwesome name="book" size={24} color="black" />
  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <View style={{backgroundColor:'#ffc93c'}}>
        <Image
          style={{ width: 150, height: 150, alignSelf:'center', backgroundColor :"#ffc93c"}}
          source={require('../../assets/annauniv.png')}
        />
        </View>
          <Page
            iconName= 'book-reader'
            backgroundColor="#ffc93c"
            title="Welcome to AU Library"
          />
          <Footer
            backgroundColor="#ffc93c"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#ffc93c"
            iconName="mobile-alt"
            title="Knowledge is now in your hands"
          />
          <Footer
            backgroundColor="#ffc93c"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;