/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const restaurant_view = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'brown',
    textAlign: 'center',
  },

  image: {
    marginVertical: 10,
    borderRadius: 10,
    height: deviceSize.height / 3,
  },

  description: {
    marginTop: 5,
    fontSize:15,
    marginBottom:15,
  },

  Area: {
    fontWeight: 'bold',
    marginVertical: 3,
    color:'brown',
    padding:2,
    fontSize:20,
  },

  review: {
    marginVertical: 10,
    fontStyle: 'italic',
  },

  AreaContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    left:120,
  },
});

const ContentStyles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
  },
  logo: {
    height: deviceSize.height / 2.5,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,

  },
  mealName: {
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle:'italic',
    color:'#f0e5c9',
    paddingLeft:90,

  },
  title: {},
  footer: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'brown',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {},
  buttonContainer: {
    backgroundColor: '#039be5',
    padding: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const CategorisStyles = StyleSheet.create({
  CardContainer:{
    flex:1,
    margin:5,
    borderRadius:50,
    borderColor:"#742038",
    borderWidth:2,
    justifyContent:"space-between",
  },
  CardView:{
    flex:1,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor: '#eceff1',

  },
  CardImage:{
    height:Dimensions.get("window").height / 6,
    width:Dimensions.get("window").width / 2,
    resizeMode:"contain",
    borderRadius:38,
  },
});

const main_view = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e5c9',
  },
});

export {restaurant_view,ContentStyles,CategorisStyles,main_view};
