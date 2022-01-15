import React from 'react';

const Luke = ({ message, onResponse }) => {
  return (
    <div>
      <h2>Vader just says: {message}</h2>
      <button onClick={() => onResponse('No ... no, thats not true')}>Response</button>
    </div>
  );
};

export default Luke;
