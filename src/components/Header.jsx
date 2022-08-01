import React, { memo } from 'react';

const Header = memo(({ username, onAllTweets, onMyTweets, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./img/logo.png" alt="MyTwitter Logo" className="logo-img" />
        <h1 className="logo-name">MyTwitter</h1>
        {username && <span className="logo-user">@{username}</span>}
      </div>
      {username && (
        <nav className="menu">
          <button onClick={onAllTweets}>All Tweets</button>
          <button onClick={onMyTweets}>My Tweets</button>
          <button onClick={onLogout} className="menu-item">
            Logout
          </button>
        </nav>
      )}
    </header>
  );
});

export default Header;
