import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'

import Categories from './components/Pages/Categories/Categories'
import Demon_slayer from './components/Pages/Categories/Anime/Demon_slayer/Demon_slayer'
import Dss1e1 from './components/Pages/Categories/Anime/Demon_slayer/Demon_slayer_s1e1/Dss1e1'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/demon_slayer" element={<Demon_slayer/>} />
         <Route path='/demon_slayer_season1_episode1' element={<Dss1e1/>}></Route>
        <Route path="*" element={<Notfound />} />
      </Routes>

      
    </BrowserRouter>
  )
}

export default App
