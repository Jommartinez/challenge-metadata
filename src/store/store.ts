import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './slice/favoritesSlice'
import searchReducer from './slice/searchSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer,
  },
})
