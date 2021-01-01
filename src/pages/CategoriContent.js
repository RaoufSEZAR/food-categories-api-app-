/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList,ActivityIndicator,Text} from 'react-native';
import axios from 'axios';
import {CategoriContentCard} from '../components';
import {main_view} from '../styles/components_style';

function CategoriContent(props) {
    const {selected_data} = props.route.params;
    const [categoriesList,setCategoriesList] = useState(null);
    const [loading, setLoading] = useState(false);

async function fetchCategoriesData() {
    setLoading(true);
    const {data} = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selected_data}`
    );
    setCategoriesList(data.meals);
    setLoading(false);
    }

    useEffect(() => {
    fetchCategoriesData();
    },[]);

    if (!categoriesList) {
        return (
        <SafeAreaView
        style={main_view.center}
        >
            <ActivityIndicator />
            <ActivityIndicator size="large" color="red" />
            <Text>Loading Categori Contents...</Text>
        </SafeAreaView>
        );
    }

const renderCategories = ({item}) => (

    <CategoriContentCard
    category={item}
    onClick={() => props.navigation.navigate('Meel Detail', {Id: item.idMeal})}
    />
);


return (
    <SafeAreaView style={styles.container}>
        <View style={styles.ViewContainer}>
            <FlatList
            keyExtractor={(item) => item.idMeal.toString()}
            data={categoriesList}
            renderItem={renderCategories}
            numColumns={1}
            />
        </View>
    </SafeAreaView>
        );
}

export {CategoriContent};

const styles = StyleSheet.create({
container: {
    backgroundColor: 'red',
    flex:1,
    },
    ViewContainer: {
    backgroundColor: '#f0e5c9',
    flex:1,
    },
});


