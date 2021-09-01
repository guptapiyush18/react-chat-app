import React from 'react';
import './Infobar.css';
const Infobar = ({ room }) => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img
          className='onlineIcon'
          src='http://bit.ly/secondIcon'
          alt='online'
        />
        <h3>{room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img alt='close' src='http://bit.ly/firstIcon' />
        </a>
      </div>
    </div>
  );
};

export default Infobar;
