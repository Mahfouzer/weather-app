import React from "react";
import { Link } from "react-scroll";

export default function Navigator() {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav'>
            <li>
              <Link
                activeClass='active'
                className='Home'
                to='Home'
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                className='Weather'
                to='Weather'
                spy={true}
                smooth={true}
                duration={500}
              >
                Weather
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
