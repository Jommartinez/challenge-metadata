import { useEffect } from 'react'
import { List, Paginate } from '../../components'
import { fetchList } from '../../api'
import {
  setList,
  setTotal,
  setCurrentPage,
} from '../../store/slice/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { sortList } from '../../utils'

export const ListLayout = () => {
  const dispatch = useDispatch()
  const {
    list,
    total,
    searchTerm,
    searchType,
    currentPage,
    ratingSort,
    votesSort,
  } = useSelector((state: any) => state.search)

  const totalPages = Math.ceil(parseInt(total) / 10)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetchList(currentPage, searchTerm, searchType)

      let sortedList = sortList(response.list, ratingSort, votesSort)
      dispatch(setList(sortedList))
      dispatch(setTotal(response.total))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    if (searchTerm) fetchData()
  }, [searchTerm, searchType, currentPage, ratingSort, votesSort])

  if (list.length === 0 && searchTerm && !total)
    return <p>No se encontraron resultados</p>
  if (!searchTerm) return <p>Introduce un título para ver resultados</p>
  if (list.length === 0 && searchTerm) return <p>Cargando...</p>

  return (
    <div>
      {list && list.length > 0 && <List list={list} total={total} />}
      {list && list.length ? (
        <Paginate
          onClickPrev={handlePrevPage}
          onClickNext={handleNextPage}
          disabledPrev={currentPage === 1}
          disabledNext={currentPage === totalPages}
        />
      ) : null}
    </div>
  )
}
