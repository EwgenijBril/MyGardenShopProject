import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import ProductsPage from './pages/ProductsPage'
import ProductDescrPage from './pages/ProductDescrPage'
import CartPage from './pages/CartPage'
import Layout from './components/Layout';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/categories' element={<CategoriesPage/>} />
          <Route path='/category' element={<ProductsPage/>} />
          <Route path='/product/:id' element={<ProductDescrPage/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
