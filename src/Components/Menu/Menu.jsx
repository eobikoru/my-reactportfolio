import React from 'react';
import  './Menu.css'

function Menu({ menuopen, setmenuopen }) {
  return (
    <div className={"menu " + (menuopen && "active")}>
      <ul>
        <li onClick={() => setmenuopen(false)}>
          {" "}
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setmenuopen(false)}>
          {" "}
          <a href="#portfolio">portfolio</a>
        </li>
        <li onClick={() => setmenuopen(false)}>
          {" "}
          <a href="#works"> works</a>
        </li>
        <li onClick={() => setmenuopen(false)}>
          {" "}
          <a href="#testimonials">testimonials</a>
        </li>
        <li onClick={() => setmenuopen(false)}>
          {" "}
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
