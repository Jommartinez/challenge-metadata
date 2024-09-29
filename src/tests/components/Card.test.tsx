import { describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../../store/slice/favoritesSlice'
import { Card } from '../../components'
import { Type } from '../../types/List'

const mockItem = {
  imdbID: 'tt0372784',
  Title: 'Batman Begins',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Type: 'movie' as Type,
  Year: '2005',
  imdbRating: '',
  imdbVotes: '',
}

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})

const WrapperComponent = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
)

describe('Card Component', () => {
  test('render item with correct info', () => {
    render(<Card item={mockItem} />, { wrapper: WrapperComponent })

    expect(screen.getByText('Batman Begins')).toBeInTheDocument()
    expect(screen.getByAltText('Batman Begins')).toHaveAttribute(
      'src',
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    )
  })

  test('show image default when havent image', () => {
    const itemSinPoster = { ...mockItem, Poster: 'N/A' }
    render(<Card item={itemSinPoster} />, { wrapper: WrapperComponent })

    expect(screen.getByAltText('Batman Begins')).toHaveAttribute(
      'src',
      '/src/assets/not-found.png',
    )
  })

  test('add and remove favorite item', () => {
    render(<Card item={mockItem} />, { wrapper: WrapperComponent })

    const favoriteButton = screen.getByRole('button')

    fireEvent.click(favoriteButton)
    expect(store.getState().favorites).toContainEqual(mockItem)

    fireEvent.click(favoriteButton)
    expect(store.getState().favorites).not.toContainEqual(mockItem)
  })

  test('next page whit click in image', () => {
    render(<Card item={mockItem} />, { wrapper: WrapperComponent })

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/tt0372784')
  })
})
