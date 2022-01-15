import React from 'react';
import Luke from './Luke';

const Vader = () => {
  function onResponse(res) {
    // console.log(´Luke response: {$res}´);
  }

  return (
    <div>
      <Luke message="I am your father" onResponse={onResponse} />
    </div>
  );
};

export default Vader;
