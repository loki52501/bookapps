
import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const bookNumColums = 2;
// item size
const BOOK_ITEM_HEIGHT = 200;
const BOOK_ITEM_MARGIN = 20;

// 2 photos per width
export const PdfView = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: BOOK_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (bookNumColums + 1) * BOOK_ITEM_MARGIN) / bookNumColums,
    height: BOOK_ITEM_HEIGHT + 75,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 15,
  },
  photo: {
    width:100,
    height: 100,
    alignSelf: 'flex-start',
    
    marginLeft: 50
  },
  title: {

    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
 
  },
  author:{
    fontSize:14,
    
    fontWeight: 'bold',
    color:'grey'
  },
  pub_year:{
    fontSize:12,
    color:'grey'
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },

  btn_1 :{
    marginHorizontal: 20,
    marginTop: 5

  
  },

  bookmark:{
    alignSelf:'flex-end',
    marginBottom: 90,
  
    marginLeft: 20,
    
  
  },
  
  img_align:{
    
    justifyContent: 'space-between',
   
    padding: 8,
    flexDirection:'row',
  
  }
  



  
});
