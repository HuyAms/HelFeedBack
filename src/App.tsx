import React from 'react';
import './App.css';
import { Router } from "@reach/router"
import Main from './screen/Main';
import Category from './screen/Category';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
      <div>
        <Navigation/>
        <Router>
          <Main path="/" />
          <Category path="category" />
        </Router>
      </div>
  );
};

export default App;
