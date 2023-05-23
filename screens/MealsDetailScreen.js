import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";


const MealsDetailScreen = ({route, navigation}) =>{
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealID = route.params.mealId;
    const meal = MEALS.find((m) => m.id === mealID);
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealID);

    const headerButtonPressHandler = () =>{
         if(mealIsFavorite) favoriteMealsCtx.removeFavorite(mealID);
         else favoriteMealsCtx.addFavorite(mealID);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>{
                return (
                    <IconButton  icon="star" 
                    onPress={headerButtonPressHandler} 
                    color={mealIsFavorite ? 'red' : 'white'}/>
                )
            }
        });
    },[navigation, headerButtonPressHandler]);
    
    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: meal.imageUrl}}/>
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails 
            duration={meal.duration} 
            complexity={meal.complexity} 
            affordability={meal.affordability} 
            style={styles.title} 
            textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle title={"Ingredients"}/>
                    <List data={meal.ingredients}/>
                    <Subtitle title={"Steps"}/>
                    <List data={meal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color: 'gray'
    },
    listContainer:{
        width: '80%',
        height: 350
    },
    listOuterContainer:{
        alignItems: 'center'
    }
});

export default MealsDetailScreen;