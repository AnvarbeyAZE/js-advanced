import React from 'react';
import './search-box.styles.css';


export const SearchBox = ({placeholder,handlemethod})=> (

    <input className='search' type='search' placeholder={placeholder} onChange={handlemethod}></input>


);   