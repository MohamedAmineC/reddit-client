import React from 'react';
import { Header } from '../features/header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Categories from '../features/categories/Categories';
import SearchPage from '../pages/searchPage';
import CategoryPage from '../pages/categoryPage';


function App() {
  return (
    <>
      <Header />
      <main>
          <Categories />
          <Routes>
            <Route path="/category/:category" element={<CategoryPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route exact path="/" element={<h2>Home feed</h2> } /> 
          </Routes>
      </main>
    </>
  );
}

export default App;
