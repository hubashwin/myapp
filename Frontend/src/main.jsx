import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import You from './pages/You.jsx'
import './index.css'
import Cart from './pages/Cart.jsx'
import SignIn from "./pages/Sign In.jsx"
import Fashion from './pages/fashion.jsx'
import Home from './pages/Home.jsx'
import Electronics from './pages/Categories/Electronics.jsx'
import Login from './pages/LogIn.jsx'
import Footer from './pages/Footer.jsx'
import Men from './pages/Categories/Men.jsx'
import Women from './pages/Categories/Women.jsx'
import NoPage from './pages/NoPage.jsx'
import axios from 'axios';
import { AuthProvider } from './context/AuthContext.jsx'
import Products from './pages/ProductList.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
export default function App() {

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="product" element={<Products />} />
              <Route path='sign-in' element={<SignIn />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
              <Route path="you" element={<You />} />
              <Route path='electronics' element={<Electronics />} />
              <Route index element={<Home />} />
              <Route path='fashion/women' element={<Women />} />
              <Route path='fashion/men' element={<Men />} />
              <Route path="login" element={<Login />} />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route path='fashion' element={<Fashion />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<AuthProvider><App /></AuthProvider>)