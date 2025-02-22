import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isScaleAnimation, setIsScaleAnimation] = useState(false);

  const handleOverlayToggle = () => {
    setIsRightPanelActive(!isRightPanelActive);
    setIsScaleAnimation(true);
    setTimeout(() => setIsScaleAnimation(false), 600);
  };

  const handleSubmit = async (data) => {
    try {
      const endpoint = data.type === 'signup' ? '/signup' : '/signin';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right__panel__active' : ''}`}>
      <SigninForm onSubmit={handleSubmit} />
      <SignupForm onSubmit={handleSubmit} />
      
      <div className="overlay__container" id="overlayContainer">
        <div className="overlay__wrapper">
          <div className="overlay__panel overlay__panel__left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={handleOverlayToggle}>SIGN IN</button>
          </div>
          <div className="overlay__panel overlay__panel__right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={handleOverlayToggle}>SIGN UP</button>
          </div>
        </div>
        <button 
          id="overlayBtn" 
          onClick={handleOverlayToggle} 
          className={isScaleAnimation ? 'scale__btn-animation' : ''}
        />
      </div>
    </div>
  );
};

const SigninForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, type: 'signin' });
  };

  return (
    <div className="form__container signin__container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <span>or use your account</span>
        <div className="form__group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form__group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <a href="#" className="forgot__password">Forgot your password?</a>
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
};

const SignupForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password, type: 'signup' });
  };

  return (
    <div className="form__container signup__container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <div className="form__group">
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div className="form__group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form__group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Login;