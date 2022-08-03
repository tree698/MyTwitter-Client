import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AllTweets from './pages/allTweets';
import MyTweets from './pages/myTweets';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      {/* index에서 BrowerRouter 이미 사용 */}
      <Routes>
        <Route path="/" element={<AllTweets />} />
        <Route path="/:username" element={<MyTweets />} />
      </Routes>
    </div>
  );
};

export default App;
