/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import {SingleMeal} from '../components';

function MeelDetail({route}) {
    const {Id} = route.params;
    const [mealsList,setMealsList] = useState({});
    // const [loading, setLoading] = useState(false);

    async function fetchMealsData() {
    const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`,
    );
    setMealsList(response.data.meals);
    }

    useEffect(() => {
    fetchMealsData();
    },[]);

    const renderMeals = ({item}) => (
    <SingleMeal category={item}/>
    );


    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.ViewContainer}>
            <FlatList
            keyExtractor={(item) => item.idMeal.toString()}
            data={mealsList}
            renderItem={renderMeals}
            numColumns={1}
            />
        </View>
    </SafeAreaView>
        );
    }

    export {MeelDetail};

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


