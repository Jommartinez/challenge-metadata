import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Search } from '../../types'

interface SearchState {
  searchTerm: string
  searchType: string
  list: Search[]
  total: string
  currentPage: number
  ratingSort: 'asc' | 'desc' | ''
  votesSort: 'asc' | 'desc' | ''
}

const initialState: SearchState = {
  searchTerm: '',
  searchType: 'all',
  list: [],
  total: '',
  currentPage: 1,
  ratingSort: '',
  votesSort: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    setList: (state, action: PayloadAction<Search[]>) => {
      state.list = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    setRatingSort: (state, action: PayloadAction<'asc' | 'desc' | ''>) => {
      state.ratingSort = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    setVotesSort: (state, action: PayloadAction<'asc' | 'desc' | ''>) => {
      state.votesSort = action.payload
      localStorage.setItem('searchState', JSON.stringify(state))
    },
    resetSearch: state => {
      state.searchTerm = ''
      state.searchType = 'all'
      state.list = []
      state.total = ''
      state.currentPage = 1
      state.ratingSort = ''
      state.votesSort = ''
      localStorage.removeItem('searchState')
    },
  },
})

export const {
  setSearchTerm,
  setSearchType,
  setList,
  setTotal,
  resetSearch,
  setCurrentPage,
  setRatingSort,
  setVotesSort,
} = searchSlice.actions
export default searchSlice.reducer
