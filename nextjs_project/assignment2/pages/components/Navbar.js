import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Style1 from '../../styles/navbar.css'

const Navbar = () => {
  return (
    <div id="nav">

      <nav class="nav-menu">
        {/* <div className="Style1.top"> */}
          {/* <div id="Style1.logo nav-list"> */}
          <div>
            <Image
              src="/images/Frame.png" alt="Mountain" width={108.75} height={30} />
          
        <ul>
          <Link href='/Invest'><li>Invest</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/About'><li>About</li></Link>
        </ul>
        {/* </div> */}

          <button class="bestinvestment">Best Investment Options</button>
          {/* <div id="Button-Investment-options">
        <button class="Button blue">Best Investment options</button> */}
          {/* </div> */}
          </div>
      </nav>
    </div>
  )
}

export default Navbar