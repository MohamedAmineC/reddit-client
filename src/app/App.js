import React from 'react';
import { Header } from '../features/header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Categories from '../features/categories/Categories';


function App() {
  return (
    <Router>
      <Header />
      <main>
          <Categories />
            <div>search Page</div>
            <div>Home feed</div>  
      </main>
    </Router>
  );
}

export default App;
