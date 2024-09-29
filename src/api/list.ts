import axios from '../libs/axios'
import { fetchDetail } from './detail'

export const fetchList = async (page = 1, searchTerm = '', type = '') => {
  try {
    const response = await axios.get('', {
      params: {
        page,
        s: searchTerm,
        ...(type !== 'all' && { type }),
      },
    })
    const detailedList = await Promise.all(
      (response?.data?.Search || []).map(async (item: any) => {
        const detailResponse = await fetchDetail(item.imdbID)
        return { ...item, ...detailResponse.data }
      }),
    )

    return {
      list: detailedList,
      total: response.data.totalResults,
    }
  } catch (error) {
    throw error
  }
}
