import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Search } from '../../types'

const loadFavorites = (): Search[] => {
  const favoritosGuardados = localStorage.getItem('favoritos')
  return favoritosGuardados ? JSON.parse(favoritosGuardados) : []
}

const saveFavorites = (favoritos: Search[]) => {
  localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavorites() || ([] as Search[]),
  reducers: {
    addFavorite: (state, action: PayloadAction<Search>) => {
      state.push({
        imdbID: action.payload.imdbID,
        Title: action.payload.Title,
        Poster: action.payload.Poster,
        Year: action.payload.Year,
        Type: action.payload.Type,
        imdbRating: action.payload.imdbRating || '',
        imdbVotes: action.payload.imdbVotes || '',
      })
      saveFavorites(state)
    },
    removeFavorite: (state, action: PayloadAction<{ imdbID: string }>) => {
      const newState = state.filter(fav => fav.imdbID !== action.payload.imdbID)
      saveFavorites(newState)
      return newState
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
