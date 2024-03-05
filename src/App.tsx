import { HashRouter, Route, Routes } from 'react-router-dom'

import NotFoundPage from './pages/404page'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <div className='mx-auto'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
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
