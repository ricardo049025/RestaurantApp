import { StyleSheet, Text, View } from "react-native";

const List = ({data}) =>{
    return (
        data.map((item,index) => (
            <View key={index} style={styles.listItem}>
                <Text style={styles.itemTex}>{item}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemTex:{
        color: '#351401',
        textAlign: 'center'
    }
});

export default List;