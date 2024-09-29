import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeartIcon } from '..'
import { Search } from '../../types'
import notFound from '../../assets/not-found.png'
import styles from './Card.module.scss'
import { addFavorite, removeFavorite } from '../../store/slice/favoritesSlice'

interface CardProps {
  item: Search
}

export const Card = ({ item }: CardProps) => {
  const dispatch = useDispatch()
  const favorites = useSelector(
    (state: { favorites: Search[] }) => state.favorites,
  )
  const isFavorite = favorites.some(fav => fav.imdbID === item.imdbID)

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item))
    } else {
      dispatch(addFavorite(item))
    }
  }

  return (
    <article className={styles.card}>
      <NavLink to={`/${item.imdbID}`} className={styles['wrapper-image']}>
        <img
          src={item.Poster === 'N/A' ? notFound : item?.Poster}
          alt={item?.Title}
          className={styles.image}
        />
      </NavLink>
      <div className={styles.info}>
        <div className={styles.line}></div>
        <h2 className={styles.title}>{item?.Title}</h2>
        <button className={styles.button} onClick={handleFavorite}>
          <HeartIcon className={styles.icon} isSelected={isFavorite} />
        </button>
      </div>
    </article>
  )
}
