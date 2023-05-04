import { FlatList, StyleSheet, Text, View } from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealItem from '../components/MealItem';
import { useEffect, useLayoutEffect } from 'react';

const MealsOverViewScreen = ({route,navigation}) => {


    const {categoryId} = route.params;

    const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);
    

    useLayoutEffect(() =>{
        const categoryTitle = CATEGORIES.find((item) => item.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle
       })
    } ,[categoryId,navigation]);
   

    const renderMealItem = (itemData) =>{
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }

        return <MealItem Meal={mealItemProps}/>
    }


    return (
        <View style={styles.container}>
            <FlatList  data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}>

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
});

export default MealsOverViewScreen;