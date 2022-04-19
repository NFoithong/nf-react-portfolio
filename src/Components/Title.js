import React from 'react';

function Title({title, span}) {
  return (
    <div>
    <h3 className='Title'>
    {title}
        <span>{span}</span>
    </h3>
    </div>
  )
}

export default Title;