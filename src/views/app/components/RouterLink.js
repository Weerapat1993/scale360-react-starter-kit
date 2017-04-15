import React from 'react';
import { Link } from 'react-router-dom';

class RouterLink extends React.Component {
  render() {
    const { to, location, children, handleClick } = this.props
    return (
      <li className={(location.pathname === to) ? 'active' : ''}>
        {
          (handleClick) ?
          <a href="#" onClick={handleClick}>
            {children}
          </a> :
          <Link to={to}>
            {children}
          </Link>
        }
      </li>
    )
  }
}

export default RouterLink;
