import {MEALS, CATEGORIES} from '../data/dummy-data'
import {useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

const MealsOverViewScreen = ({route,navigation}) => {


    const {categoryId} = route.params;

    const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);
    

    useLayoutEffect(() =>{
        const categoryTitle = CATEGORIES.find((item) => item.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle
       })
    } ,[categoryId,navigation]);
   
    return <MealsList items={displayMeals}/>
}



export default MealsOverViewScreen;