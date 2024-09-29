import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  setCurrentPage,
  setRatingSort,
  setSearchTerm,
  setSearchType,
  setVotesSort,
} from '../store/slice/searchSlice'

export const useSearch = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { searchTerm, searchType, ratingSort, votesSort } = useSelector(
    (state: any) => state.search,
  )

  const isInDetail =
    /^\/[^/]+$/.test(location.pathname) &&
    location.pathname !== '/' &&
    location.pathname !== '/favorites'

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRatingSort(e.target.value as 'asc' | 'desc' | ''))
    dispatch(setCurrentPage(1))
    if (isInDetail) {
      navigate('/')
    }
  }

  const handleVotesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setVotesSort(e.target.value as 'asc' | 'desc' | ''))
    dispatch(setCurrentPage(1))
    if (isInDetail) {
      navigate('/')
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value))
    dispatch(setCurrentPage(1))
    if (isInDetail) {
      navigate('/')
    }
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchType(e.target.value))
    dispatch(setCurrentPage(1))
    if (isInDetail) {
      navigate('/')
    }
  }

  return {
    searchTerm,
    searchType,
    ratingSort,
    votesSort,
    handleRatingChange,
    handleVotesChange,
    handleSearch,
    handleTypeChange,
  }
}
