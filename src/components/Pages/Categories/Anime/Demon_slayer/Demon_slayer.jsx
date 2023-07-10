import React from 'react'
import { Link } from 'react-router-dom'
const Demon_slayer = () => {
  return (
    <div>
        <ul>
            <li>
              <Link to='/demon_slayer_season1_episode1'> Season 1 Episode 1</Link>
            </li>
            <li><Link to='/demon_slayer_season4_episode4'>Season 4 Episode 4</Link></li>
            <li>
              <Link to='/demon_slayer_season4_episode5'>Season 4 Episode 5</Link>
            </li>
            <li>
              <Link to='/demon_slayer_season4_episode6'>Season 4 Episode 6</Link>
            </li>
        </ul>
    </div>
  )
}

export default Demon_slayer