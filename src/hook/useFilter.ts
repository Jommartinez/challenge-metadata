import { useMemo } from 'react'
import { Search } from '../types'
import { filterList, sortList } from '../utils'

export const useFilter = (
  list: Search[],
  searchTerm: string,
  searchType: string,
  ratingSort: 'asc' | 'desc' | '',
  votesSort: 'asc' | 'desc' | '',
) => {
  return useMemo(() => {
    let filteredList = filterList(list, searchTerm, searchType)
    return sortList(filteredList, ratingSort, votesSort)
  }, [list, searchTerm, searchType, ratingSort, votesSort])
}
