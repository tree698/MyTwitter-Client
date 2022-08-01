import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AllTweets from './pages/allTweets';
import MyTweets from './pages/myTweets';

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
