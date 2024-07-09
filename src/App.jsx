import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
