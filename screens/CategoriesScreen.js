import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}) =>{

    const renderCategoryItem = (itemData) =>{
        const pressHandler = () =>{
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id,
                title: itemData.item.title
            });

        }
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={pressHandler}/>
    }

    return <FlatList 
    data={CATEGORIES} 
    key={(item) => item.id} 
    renderItem={renderCategoryItem} 
    numColumns={2}/>
}

export default CategoriesScreen;