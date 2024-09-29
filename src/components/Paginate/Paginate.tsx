import { ArrowLeft, ArrowRight } from 'lucide-react'
import styles from './Paginate.module.scss'

interface PaginateProps {
  onClickPrev: () => void
  onClickNext: () => void
  disabledPrev: boolean
  disabledNext: boolean
}

export const Paginate = ({
  onClickPrev,
  onClickNext,
  disabledPrev,
  disabledNext,
}: PaginateProps) => {
  return (
    <div className={styles.paginate}>
      <button
        className={styles.button}
        onClick={onClickPrev}
        disabled={disabledPrev}
      >
        <ArrowLeft size={16} /> Previous
      </button>
      <button
        className={styles.button}
        onClick={onClickNext}
        disabled={disabledNext}
      >
        Next <ArrowRight size={16} />
      </button>
    </div>
  )
}
