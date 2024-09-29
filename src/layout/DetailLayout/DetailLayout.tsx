import { useParams } from 'react-router-dom'
import styles from './DetailLayout.module.scss'
import { useEffect, useState } from 'react'
import { fetchDetail } from '../../api'
import { Detail as DetailInterface } from '../../types'
import { Detail } from '../../components'

export const DetailLayout = () => {
  const [detail, setDetail] = useState<DetailInterface | null>(null)
  const { id } = useParams<{ id: string }>()

  const fetchData = async () => {
    try {
      const response = await fetchDetail(id)
      setDetail(response?.data)
    } catch (error) {
      console.error('Error fetching response', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles['detail-layout']}>
      <Detail detail={detail} />
    </div>
  )
}
