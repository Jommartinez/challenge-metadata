import { Search } from '../types'

export const sortByRating = (list: Search[], order: 'asc' | 'desc') => {
  return [...list].sort((a, b) => {
    const ratingA = parseFloat(a.imdbRating ?? '0') || 0
    const ratingB = parseFloat(b.imdbRating ?? '0') || 0
    return order === 'asc' ? ratingA - ratingB : ratingB - ratingA
  })
}

export const sortByVotes = (list: Search[], order: 'asc' | 'desc') => {
  return [...list].sort((a, b) => {
    const votesA = parseInt(a.imdbVotes?.replace(/,/g, '') ?? '0') || 0
    const votesB = parseInt(b.imdbVotes?.replace(/,/g, '') ?? '0') || 0
    return order === 'asc' ? votesA - votesB : votesB - votesA
  })
}

export const sortList = (
  list: Search[],
  ratingSort: 'asc' | 'desc' | '',
  votesSort: 'asc' | 'desc' | '',
) => {
  let sortedList = [...list]
  if (ratingSort) {
    sortedList = sortByRating(sortedList, ratingSort)
  }
  if (votesSort) {
    sortedList = sortByVotes(sortedList, votesSort)
  }
  return sortedList
}

export const filterList = (
  list: Search[],
  searchTerm: string,
  searchType: string,
) => {
  return list.filter(
    item =>
      item.Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchType === 'all' || item.Type === searchType),
  )
}
