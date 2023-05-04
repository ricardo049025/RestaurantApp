import { StyleSheet, View, Text } from "react-native";

const MealDetails = ({duration,complexity,affordability, style, textStyle}) =>{
    return (
        <View style={[styles.mealDetail,style]}>
            <Text style={[styles.itemDetail,textStyle]}>{duration}m</Text>
            <Text style={[styles.itemDetail,textStyle]}>{complexity}</Text>
            <Text style={[styles.itemDetail,textStyle]}>{affordability}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mealDetail:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    itemDetail:{
        marginHorizontal: 4,
        fontSize: 12
    }
})
export default MealDetails;