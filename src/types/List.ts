export interface List {
  Search: Search[]
  totalResults: string
  Response?: string
}

export interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: Type
  Poster: string
  imdbRating?: string
  imdbVotes?: string
}

export enum Type {
  Movie = 'movie',
  Series = 'series',
}
