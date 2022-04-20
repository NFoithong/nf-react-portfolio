import React from 'react';
import {NavLink} from 'react-router-dom';

function Categories({filter, categories}) {
  return (
    <div>
        {/* <h1 onClick={()=>filter('Web Development')}>Web Development</h1> */}
        {
            categories.map((cat, i)=>{
                return <NavLink key={i} onClick={()=>filter(cat)}>{cat}</NavLink>
            })
        }
    </div>
  )
}

export default Categories;