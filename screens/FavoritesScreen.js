import { StyleSheet, Text, View } from "react-native";

const FavoriteScreen = () =>{
    return
    (
        <View style={styles.rootContainer}>
            <Text>
                Aqui Ricardo
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default FavoriteScreen;