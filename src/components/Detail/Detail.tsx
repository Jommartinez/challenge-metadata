import { Star, Trophy } from 'lucide-react'
import styles from './Detail.module.scss'
import { Detail as DetailInterface } from '../../types'

import notFound from '../../assets/not-found.png'

interface DetailProps {
  detail: DetailInterface | null
}

export const Detail = ({ detail }: DetailProps) => {
  return (
    <>
      <img
        className={styles.image}
        src={detail?.Poster === 'N/A' ? notFound : detail?.Poster}
        alt={detail?.Title}
      />

      <div>
        <h2 className={styles['title-detail']}>
          {detail?.Title} <span className={styles.small}>({detail?.Year})</span>
        </h2>
        <p>{detail?.Language}</p>
        <div className={styles.data}>
          <strong>Released:</strong> <span>{detail?.Released}</span> •{' '}
          <strong>Genre:</strong> <span>{detail?.Genre}</span> •{' '}
          <strong>Runtime:</strong> <span>{detail?.Runtime}</span>
        </div>
        <div>
          <div className={styles.rating}>
            <div className={styles['wrapper-rating']}>
              <strong>{detail?.imdbRating}</strong>
              <Star color="#f9ce0f" fill="#f9ce0f" />
            </div>{' '}
            • <span className={styles.votes}>{detail?.imdbVotes} votes</span>
          </div>
        </div>

        <p>{detail?.Plot}</p>
        <p>
          <strong>Director:</strong> Christopher Nolan
        </p>
        <p>
          <strong>Actors:</strong> Christian Bale, Michael Caine, Liam Neeson,
          Katie Holmes
        </p>
        <p>
          <strong>Writer:</strong> Bob Kane, David S. Goyer, Christopher Nolan
        </p>
        <p className={styles.trophy}>
          <Trophy color="#f9ce0f" /> {detail?.Awards}
        </p>
      </div>
    </>
  )
}
