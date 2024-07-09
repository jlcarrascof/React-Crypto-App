import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { Coin } from './pages/Coin'
import { WatchList } from './pages/WatchList'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />}></Route>
            <Route path="watchlist" element={<WatchList />}></Route>
            <Route path="coin" element={<Coin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
