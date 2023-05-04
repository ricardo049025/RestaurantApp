import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='MealsCategories' 
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen 
          name='MealsCategories' 
          component={CategoriesScreen} 
          options={{
            headerTitle: "All Categories"
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
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
