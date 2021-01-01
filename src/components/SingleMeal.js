/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image ,TouchableOpacity , Linking} from 'react-native';
import {restaurant_view} from '../styles/components_style';

const SingleMeal = ({category}) => {
  return (
    <View style={restaurant_view.container}>
      <Text style={restaurant_view.title}>{category.strMeal}</Text>
      <Image source={{uri: category.strMealThumb}} style={restaurant_view.image} />
      <View style={restaurant_view.AreaContainer}>
        <Text style={restaurant_view.Area}>{category.strCategory} </Text>
        <Text style={restaurant_view.Area}> /  {category.strArea}</Text>
      </View>
      <Text style={restaurant_view.description}>{category.strInstructions}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(`${category.strYoutube}`)}>
        <Text style={{color: 'brown',fontWeight:'bold',textAlign:'center'}}>
            watch it in Youtube
        </Text>
    </TouchableOpacity>
    </View>
  );
};

export {SingleMeal};
