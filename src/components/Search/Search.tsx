import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import styles from './Search.module.scss'
import { fetchList } from '../../api'
import { useSearch } from '../../hook'

export const Search = () => {
  const location = useLocation()
  const {
    searchTerm,
    searchType,
    ratingSort,
    votesSort,
    handleRatingChange,
    handleVotesChange,
    handleSearch,
    handleTypeChange,
  } = useSearch()

  const isInFavorites = location.pathname === '/favorites'

  useEffect(() => {
    if (!isInFavorites && searchTerm) {
      const delayDebounceFn = setTimeout(() => {
        fetchList(1, searchTerm, searchType)
      }, 300)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [searchTerm, searchType, isInFavorites])

  return (
    <div className={styles['wrapper-search']}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select
        className={styles.select}
        value={searchType}
        onChange={handleTypeChange}
      >
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
      </select>
      <select
        className={styles.select}
        value={ratingSort}
        onChange={handleRatingChange}
      >
        <option value="">Rating</option>
        <option value="asc">Rating (Ascendente)</option>
        <option value="desc">Rating (Descendente)</option>
      </select>
      <select
        className={styles.select}
        value={votesSort}
        onChange={handleVotesChange}
      >
        <option value="">Votos</option>
        <option value="asc">Votos (Ascendente)</option>
        <option value="desc">Votos (Descendente)</option>
      </select>
    </div>
  )
}
