/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, ActivityIndicator,Text,FlatList} from 'react-native';
import axios from 'axios';
import {CategorisCard} from '../components';
import {main_view} from '../styles/components_style';



const api_url = "https://www.themealdb.com/api/json/v1/1/categories.php";


function Categories(props) {
    const [categoriesList,setCategoriesList] = useState(null);
    const [loading, setLoading] = useState(false);


    async function fetchCategoriesData() {
        setLoading(true);
        const {data} = await axios.get(
        api_url,
        );
        setCategoriesList(data.categories);
        setLoading(false);
    }

    const renderCategories = ({item}) => (

        <CategorisCard
        category={item}
        onClick={() => props.navigation.navigate('Categori Content', {selected_data: item.strCategory})}
        />
    );

    useEffect(() => {
        fetchCategoriesData();
    }, []);

    if (!categoriesList) {
            return (
            <SafeAreaView
            style={main_view.center}
            >
                <ActivityIndicator />
                <ActivityIndicator size="large" color="red" />
                <Text>Loading Food Categories...</Text>
            </SafeAreaView>
            );
        }
    return (
        <SafeAreaView style={CategoriesStyles.container}>
            <View style={CategoriesStyles.ViewContainer}>
                <FlatList
                keyExtractor={(item) => item.idCategory.toString()}
                data={categoriesList}
                renderItem={renderCategories}
                numColumns={2}
                />
            </View>
        </SafeAreaView>
            );
}

export {Categories};

const CategoriesStyles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex:1,
    },
    ViewContainer: {
        backgroundColor: '#f0e5c9',
        flex:1,
    },
});
