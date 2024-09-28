import { Outlet, Route, Routes } from 'react-router-dom'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Header y search</h1>
            <Outlet />
          </>
        }
      >
        <Route index element={<h1>list</h1>} />
        <Route path="/:id" element={<h1>detail</h1>} />
      </Route>
    </Routes>
  )
}
