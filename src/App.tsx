import { Routes, Route } from 'react-router-dom';

import My_header from './component/header';
import Home from './component/home';
import Product from './component/product';
import Meal_planning from './component/meal_planning';
import Connection from './component/connection';
import News from './component/news';




function App() {

  return (
    <>
      <My_header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/meal_planning" element={<Meal_planning />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>

  )
}

export default App
