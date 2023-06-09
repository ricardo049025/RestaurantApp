import { Pressable, StyleSheet, Text, View,Platform } from "react-native";

const CategoryGridTile = ({title, color, onPress}) =>{

    return (
        <View style={[styles.gridItem]}>
            <Pressable android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        /* Android shadow*/ 
        elevation: 4,
        /* IOS shadow */
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        /* IOS ripper */
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    button:{
        flex: 1
    },
    buttonPressed:{
        opacity: 0.5
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default CategoryGridTile;