import React from 'react';
import { Link } from 'react-router'


const Header = () => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <h1 className="header__title">
            <a href="/">
              Todo Redux Design Pattern
            </a>
          </h1>

          <ul className="header__actions">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/task" className="link">Task</Link></li>
            <li><a className="link link--github" href="https://github.com/weerapat1993/scale360-react-starter-kit"></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
