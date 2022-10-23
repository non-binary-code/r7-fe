import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Marketplace from './pages/Marketplace';
import Item from './components/Item';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './context/ContextProvider';
import ReGift from './pages/ReGift';
import ReUse from './pages/ReUse';
import Basket from './pages/Basket';
import Recycle from './pages/Recycle';
import Repair from './pages/Repair';


function App() {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? 'md:ml-72' : 'flex-2'
          }`}
        >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Nav />
          </div>

          {/* ROUTES */}
          <div>
            <Routes>
              {/* DASHBOARD */}
              <Route path='/' element={<Home />} />
              <Route path='/marketplace' element={<Marketplace />} />
              <Route path='/re-use' element={<ReUse />} />
              <Route path='/re-gift' element={<ReGift />} />
              <Route path='/:username/:itemname' element={<Item />} />
              <Route path='/basket' element={<Basket />} />
              <Route path='/recycle' element={<Recycle />} />
              <Route path='/repair' element={<Repair />} />
            </Routes>
          </div>
          {/* ------------------------------------------------ */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
