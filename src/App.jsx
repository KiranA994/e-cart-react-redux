import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
