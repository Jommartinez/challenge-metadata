import { useSelector } from 'react-redux'
import { List } from '../../components'
import { Search as SearchType } from '../../types'
import { useFilter } from '../../hook'

export const ListFavorites = () => {
  const favorites = useSelector(
    (state: { favorites: SearchType[] }) => state.favorites,
  )
  const { searchTerm, searchType, ratingSort, votesSort } = useSelector(
    (state: any) => state.search,
  )

  const filteredFavorites = useFilter(
    favorites,
    searchTerm,
    searchType,
    ratingSort,
    votesSort,
  )

  return (
    <div>
      <h2>Favorites</h2>
      {filteredFavorites.length > 0 ? (
        <List
          list={filteredFavorites}
          total={filteredFavorites.length.toString()}
        />
      ) : (
        <p>No se encontraron favoritos.</p>
      )}
    </div>
  )
}
