import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllTweets from './pages/AllTweets';
import MyTweets from './pages/MyTweets';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTweets />} />
          <Route path="/:username" element={<MyTweets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
