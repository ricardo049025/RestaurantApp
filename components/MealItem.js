import { StyleSheet, Text, Pressable ,View, Image, Platform } from "react-native";
import { useNavigation} from '@react-navigation/native';
import MealDetails from "./MealDetails";

const MealItem = (props) => {
    const navigation = useNavigation();
    console.log("ricardo duration: " + props.Meal.duration);
    const selectMealItemHandler = () =>{
        navigation.navigate('MealsDetail',{
            mealId: props.Meal.id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) =>  pressed ? styles.cardPressed : null} onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: props.Meal.imageUrl}}/>
                        <Text style={styles.title}>
                            {props.Meal.title}
                        </Text>
                    </View>
                    <MealDetails duration={props.Meal.duration} complexity={props.Meal.complexity} affordability={props.Meal.affordability} /> 
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    cardPressed:{
        opacity: 0.75
    },
    mealItem:{
        margin: 8,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        /* Android shadow*/ 
        elevation: 4,
        /* IOS shadow */
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
})

export default MealItem;