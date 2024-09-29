import { Route, Routes } from 'react-router-dom'
import { DetailLayout, ListLayout, MainLayout, ListFavorites } from '../layout'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ListLayout />} />
        <Route path="/favorites" element={<ListFavorites />} />
        <Route path="/:id" element={<DetailLayout />} />
      </Route>
    </Routes>
  )
}
