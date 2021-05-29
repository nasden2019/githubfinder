import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img mx-auto'
        style={{ width: '100px' }}
      />
      <h3 className="my-sm-3">{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btnInfo btn-sm my-1'>
          Mas Info
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
