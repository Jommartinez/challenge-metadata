import { Search } from '../../types'
import { Card } from '../Card/Card'
import styles from './List.module.scss'

interface ListProps {
  list: Search[]
  total: string
}

export const List = ({ list, total }: ListProps) => {
  return (
    <div>
      {total && (
        <div>
          <h3>Resultados: {total}</h3>
        </div>
      )}
      <div className={styles.list}>
        {list.map(item => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>
    </div>
  )
}
