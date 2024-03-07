import { HashRouter, Route, Routes, } from 'react-router-dom'

import NotFoundPage from './pages/404page'
import HomePage from './pages/HomePage'
import ProductBuyPage from './pages/ProductsPage/ProductBuyPage'

function App() {


  return (
    <>
      <div className='mx-auto'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
          <Route path='/not-found' element={<NotFoundPage />}></Route>
          <Route path='/buy/:productname' element={<ProductBuyPage/>}></Route>
        </Routes>
      </div>
      



    </>
  )
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp
