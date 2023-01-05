import React from 'react';
import { Link } from 'react-router-dom';

const LinkItems =(props)=>{
    return(
      <li>
        <Link to={props.adress}>{props.name}</Link>
        {props.children}
      </li>
    )
}

export default LinkItems;