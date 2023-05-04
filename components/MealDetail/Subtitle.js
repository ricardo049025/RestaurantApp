import { StyleSheet, View, Text } from "react-native";

const Subtitle = ({title}) =>{

    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer:{
        margin: 6,
        padding: 4,
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2

    }
});

export default Subtitle;