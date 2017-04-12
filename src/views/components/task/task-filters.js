import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

function TaskFilters({filter}) {
  return (
    <ul className="task-filters">
      <li><Link className={classNames({active: !filter})} to="/task">View All</Link></li>
      <li><Link activeClassName="active" to={{pathname: '/task', search: '?filter=active'}}>Active</Link></li>
      <li><Link activeClassName="active" to={{pathname: '/task', search: '?filter=completed'}}>Completed</Link></li>
    </ul>
  );
}

TaskFilters.propTypes = {
  filter: PropTypes.string
};

export default TaskFilters;
