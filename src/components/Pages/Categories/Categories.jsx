
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import media from './media/media'
import "./Categories.css"

const User = () => {
  
  return (
    <div >
    <ul className='categories_container'>
      <li className='categories_dropdown'>
    
      <button class="dropbtn">
       <img src={media.anime_category_img}/>
          <h1>{media.anime_category_h1}</h1>
          
  </button>
  <div class="dropdown-content">
  <Link to='/demon_slayer'>  <a ><img src={media.demon_slayer_img}/>
              <h1>{media.demon_slayer_h1}</h1>
  </a></Link>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  
  </div>
      </li>
      
    </ul>
    </div>
    

  )
}

export default User;
