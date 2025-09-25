import React from 'react';
import './Login.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <h1 className="logo">SPORTSPHERE</h1>
        <p className="tagline">--YOUR GATEWAY TO THE WORLD OF SPORTS--</p>
      </header>

      <main className="login-container">
        {/* This div creates the circular background with the sports collage */}
        <div className="sports-circle"></div>

        {/* This container holds the login form and overlays it on the circle */}
        <div className="login-form-container">
          <form>
            <div className="form-group">
              <input type="text" id="username" placeholder="USERNAME" required />
            </div>

            <div className="form-group">
              <input type="password" id="password" placeholder="PASSWORD" required />
            </div>

            <div className="form-options">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">REMEMBER ME</label>

              <a href="#forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">LOGIN</button>

            <div className="form-footer">
              {/* You can easily change the text below as we discussed */}
              
              <a href="#create">Create Account</a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;