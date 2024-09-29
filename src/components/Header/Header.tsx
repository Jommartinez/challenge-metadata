import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeartIcon } from '..'
import styles from './Header.module.scss'
import { Search } from '../../types'
import { resetSearch } from '../../store/slice/searchSlice'

export const Header = () => {
  const dispatch = useDispatch()

  const favorites = useSelector(
    (state: { favorites: Search[] }) => state.favorites,
  )
  const movieCount = favorites.filter(item => item.Type === 'movie').length
  const seriesCount = favorites.filter(item => item.Type === 'series').length

  const handleReset = () => {
    dispatch(resetSearch())
  }

  return (
    <header className={styles.header}>
      <Link to={'/'} onClick={handleReset}>
        <h1 className={styles.title}>CinemaList</h1>
      </Link>
      <div className={styles.favorite}>
        <NavLink to={'/favorites'} onClick={handleReset}>
          <HeartIcon isSelected />
        </NavLink>
        <div>
          <p className={styles.itemFav}>
            {movieCount} {movieCount === 1 ? 'Movie' : 'Movies'}
          </p>{' '}
          <p className={styles.itemFav}>
            {seriesCount} {seriesCount === 1 ? 'Series' : 'Series'}
          </p>
        </div>
      </div>
    </header>
  )
}
