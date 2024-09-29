import axios from '../libs/axios'

export const fetchDetail = async (id: string) => {
  try {
    const response = await axios.get('', {
      params: {
        i: id,
        plot: 'full',
      },
    })
    return {
      data: response.data,
    }
  } catch (error) {
    throw error
  }
}
