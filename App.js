import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: 'white'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{ 
        title:"All Categories",
        drawerIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>)
        }}  />
      <Drawer.Screen name='Favorites' component={FavoriteScreen} options={{
        title: "All Favorites",
        drawerIcon: ({color, size}) => (<Ionicons name='star' color={color} size={size}/>)
        }}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
        <FavoritesContextProvider >
          <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='MealsCategories' 
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
            }}>
              <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigator} 
              options={{
                headerShown: false
              }}
              />
              <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverViewScreen}
              />
              <Stack.Screen 
              name='MealsDetail'
              component={MealsDetailScreen}
              />
              
            </Stack.Navigator>
          </NavigationContainer>
      </FavoritesContextProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
