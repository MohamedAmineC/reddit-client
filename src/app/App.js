import React from 'react';
import { Header } from '../features/header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Categories from '../features/categories/Categories';
import SearchPage from '../pages/searchPage';
import CategoryPage from '../pages/categoryPage';


function App() {
  return (
    <Router>
      <Header />
      <main>
          <Categories />
          <Switch>
            <Route path="/category/:category">
              <CategoryPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/">
            <h2>Home feed</h2>  
            </Route>
          </Switch>
      </main>
    </Router>
  );
}

export default App;
