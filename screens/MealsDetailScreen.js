import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";

const MealsDetailScreen = ({route, navigation}) =>{
    const mealID = route.params.mealId;
    const meal = MEALS.find((m) => m.id === mealID);
    const [isPressed, setIsPressed] = useState(false);
    const headerButtonPressHandler = () =>{
        setIsPressed(!isPressed);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>{
                return (
                    <IconButton  icon="star" onPress={headerButtonPressHandler} color={isPressed ? 'red' : 'white'}/>
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