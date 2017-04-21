import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router';

function TaskFilters({filter}) {
  return (
    <ul className="task-filters">
      <li><Link className={classNames({active: !filter})} to="/task">View All</Link></li>
      <li><Link activeClassName="active" to={{pathname: '/task', query: {filter: 'active'}}}>Active</Link></li>
      <li><Link activeClassName="active" to={{pathname: '/task', query: {filter: 'completed'}}}>Completed</Link></li>
    </ul>
  );
}

export default TaskFilters;
