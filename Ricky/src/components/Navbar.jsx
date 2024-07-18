import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <nav>
    <div>
      <Link to ="/">Rick and Morty</Link>
      <div>
        <Link to ="/Characterslist">Characters List</Link>
      
      <Link to ="/Character">Characters</Link>
      </div>
    </div>
    </nav>
  );
}

export default Navbar
