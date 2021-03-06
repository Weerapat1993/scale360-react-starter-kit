import React from 'react';
import { Link } from 'react-router'
import { APP_NAME } from '../../../core/constants'

const Header = () => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <h1 className="header__title">
            <a href="/">
              { APP_NAME }
            </a>
          </h1>

          <ul className="header__actions">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/task" className="link">Task</Link></li>
            <li>
              <a className="link link--github text-white" href="https://github.com/weerapat1993/scale360-react-starter-kit">
                <svg viewBox="0 0 20 20">
                  <path d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.9c-2.5.5-3.2-.6-3.4-1.1-.1-.3-.6-1.2-1-1.4-.4-.2-.9-.6 0-.7.8 0 1.3.7 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.3 2.8 1 .7-.2 1.6-.3 2.4-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5C20 4.5 15.5 0 10 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
