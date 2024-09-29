import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { Header, Search } from '../../components'

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Search />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
