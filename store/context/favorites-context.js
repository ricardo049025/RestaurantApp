import { useState,createContext} from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) =>{}
});

const FavoritesContextProvider = ({children}) =>{

    const [favoriteMealsIds, setFavoriteMealsIds] =  useState([]);

    const addFavorite = (id) =>{
        setFavoriteMealsIds((currentIds) => [...currentIds,id]);
    }

    const removeFavorite = (id) =>{
        setFavoriteMealsIds((currentIds) => 
        currentIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;