/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {CategorisStyles} from '../styles/components_style';

const CategorisCard = ({category, onClick}) => {
  return (
    <Pressable onPress={onClick} style={CategorisStyles.CardContainer}>
      <View style={CategorisStyles.CardView}>
      <Image
      source={{ uri: category.strCategoryThumb }}
      style={CategorisStyles.CardImage} />
      <View>
        <Text>{category.strCategory}</Text>
      </View>
      </View>
    </Pressable>
  );
};

export {CategorisCard};
