import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import DragDrop from './drag-drop/drag-drop'
import BottomNav from './bottom-nav/bottom-nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <DragDrop />
        <BottomNav />
      </header>
  
    </div>
  );
}

export default App;
