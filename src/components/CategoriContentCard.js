/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import {ContentStyles} from '../styles/components_style';

const CategoriContentCard = ({category,onClick}) => {
    return (
      <View style={ContentStyles.container}>
        <TouchableOpacity
        onPress={onClick}
        >
        <Image
          resizeMode="contain"
          source={{uri: category.strMealThumb}}
          style={ContentStyles.logo}
        />
        <View style={ContentStyles.footer}>
          <View style={ContentStyles.details}>
            <Text style={ContentStyles.mealName}>{category.strMeal}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  };

export {CategoriContentCard};
