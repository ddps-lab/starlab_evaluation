import React from 'react';
import { StickyNav } from './components/layout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary-50">
      <StickyNav />
      <MainPage />
    </div>
  );
}

export default App;
