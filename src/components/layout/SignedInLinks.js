import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => (
  <ul className="right">
  <li><NavLink to='/'>New Message</NavLink></li>
  <li><NavLink to='/'>Log Out</NavLink></li>
  <li><NavLink to='/'className='btn btn-floating pink lighten-1'>JM</NavLink></li>
  </ul>
);

export default SignedInLinks;