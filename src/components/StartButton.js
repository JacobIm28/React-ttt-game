import React from 'react';
import './StartButton.css';
//import {Link} from 'react-router-dom';

export function StartButton() {
  return(
    <>
      <button to='/Board' className='play-btn'>
        Play
      </button>
    </>
  );
}


//export default StartButton; 