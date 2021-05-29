import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Por favor, ingrese un usuario', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form text-center'>
        <input
          type='text'
          name='text'
          placeholder='Buscar Usuarios'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Buscar'
          className='btn boton'
        />
      </form>
    </div>
  );
};

export default Search;
