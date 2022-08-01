import React, { useState } from 'react';
import Banner from '../components/banner';

const Login = ({ onLogin, onSignup }) => {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setURL] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (signup) {
      onSignup(username, password, name, email, url).catch(setError);
    } else {
      onLogin(username, password).catch(setError);
    }
  };

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'url':
        return setURL(value);
      case 'signup':
        return setSignup(checked);
      default:
    }
  };

  return (
    <>
      <Banner text={text} isAlert={isAlert} />
      <form className="form-auth" onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="ID"
          onChange={onChange}
          className="form-input"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
          className="form-input"
        />
        {signup && (
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={onChange}
            className="form-input"
            required
          />
        )}
        {signup && (
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
            className="form-input"
            required
          />
        )}
        {signup && (
          <input
            type="url"
            name="url"
            value={url}
            placeholder="Profile Image URL"
            onChange={onChange}
            className="form-input"
          />
        )}
      </form>
      <div className="form-signup">
        <input
          type="checkbox"
          name="signup"
          id="signup"
          onChange={onChange}
          checked={signup}
        />
        <label htmlFor="signup">Create a new account?</label>
      </div>
      <button type="submit" className="form-btn auth-form-btn">
        {signup ? 'Sign Up' : 'Sign In'}
      </button>
    </>
  );
};

export default Login;
