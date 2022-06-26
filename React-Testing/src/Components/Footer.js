import React from "react";
import {NavLink} from 'react-router-dom'

function Footer({ numberOfIncomepleteTask }) {
  return (
    <div>
      <p>{numberOfIncomepleteTask} {numberOfIncomepleteTask === 1 ? "Task" : "Tasks"} left</p>
      <NavLink to='/follower'>Follower</NavLink>
    </div>
  );
}

export default Footer;
