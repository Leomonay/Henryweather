import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.css';

function Nav({onSearch}) {
  return (
    	<div className='barra'>
	    	<div class='izq'>
	    		<img id='logoHenry' src={Logo}/>
	    		<span>Henry - Wheather App</span>
	    	</div>
    	<div>
        	<SearchBar
          		onSearch={onSearch}
        	/>
      	</div>
      	</div>

  );
};

export default Nav;
