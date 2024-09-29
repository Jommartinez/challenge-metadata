import { describe, expect } from 'vitest'
import { sortByRating, sortByVotes, filterList } from '../../utils'
import { Search } from '../../types'
import { Type } from '../../types/List'

const mockData: Search[] = [
  {
    imdbID: '1',
    Title: 'Movie A',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Year: '2004',
    imdbRating: '8.2',
    imdbVotes: '1,000',
    Type: 'movie' as Type,
  },
  {
    imdbID: '2',
    Title: 'Movie B',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Year: '2004',
    imdbRating: '7.5',
    imdbVotes: '500',
    Type: 'movie' as Type,
  },
  {
    imdbID: '3',
    Title: 'Movie C',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Year: '2004',
    imdbRating: '9.0',
    imdbVotes: '2,000',
    Type: 'series' as Type,
  },
]

describe('sortByRating', () => {
  test('should sort by rating in ascending order', () => {
    const sorted = sortByRating(mockData, 'asc')
    expect(sorted[0].Title).toBe('Movie B')
    expect(sorted[1].Title).toBe('Movie A')
    expect(sorted[2].Title).toBe('Movie C')
  })

  test('should sort by rating in descending order', () => {
    const sorted = sortByRating(mockData, 'desc')
    expect(sorted[0].Title).toBe('Movie C')
    expect(sorted[1].Title).toBe('Movie A')
    expect(sorted[2].Title).toBe('Movie B')
  })
})

describe('sortByVotes', () => {
  test('should sort by votes in ascending order', () => {
    const sorted = sortByVotes(mockData, 'asc')
    expect(sorted[0].Title).toBe('Movie B')
    expect(sorted[1].Title).toBe('Movie A')
    expect(sorted[2].Title).toBe('Movie C')
  })

  test('should sort by votes in descending order', () => {
    const sorted = sortByVotes(mockData, 'desc')
    expect(sorted[0].Title).toBe('Movie C')
    expect(sorted[1].Title).toBe('Movie A')
    expect(sorted[2].Title).toBe('Movie B')
  })
})

describe('filterList', () => {
  test('should filter by search term and type', () => {
    const filtered = filterList(mockData, 'movie', 'movie')
    expect(filtered.length).toBe(2)
    expect(filtered[0].Title).toBe('Movie A')
    expect(filtered[1].Title).toBe('Movie B')
  })

  test('should filter by search term only', () => {
    const filtered = filterList(mockData, 'movie', 'all')
    expect(filtered.length).toBe(3)
  })
})
