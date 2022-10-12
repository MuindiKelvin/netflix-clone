import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scroll > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
        />

        <img className='nav__avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWGKNk39rCbUMmHEV3uqusN3WZ4LjYZbhrZfNGJ-85ilFgp095yz1AC5Rg7XRsLXE1eQ&usqp=CAU"
        alt='Netflix Logo'
        
        
        />
      
    </div>
  );
}

export default Nav;
