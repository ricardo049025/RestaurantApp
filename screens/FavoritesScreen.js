import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import {useContext} from 'react';
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () =>{
    const favoriteMealsCTX = useContext(FavoritesContext);
    const displayMeals = MEALS.filter((item) => favoriteMealsCTX.ids.includes(item.id));
    
    if(displayMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>)
    }

    return <MealsList items={displayMeals}/>
    
}

const styles = StyleSheet.create({
    rootContainer:{
        display: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FavoriteScreen;