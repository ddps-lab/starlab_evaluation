import React from 'react';
import './App.css';
import { StickyNav } from './components/layout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <StickyNav />
      <MainPage />
    </div>
  );
}

export default App;
