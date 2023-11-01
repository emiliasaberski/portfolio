/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import ToDo from '../../../assets/todo-mockup.png'
import './Projects.css'

const BackBtn = () => {
  return (
    <Link to="/">
      <button
        className="button-project"
        type="button">
        Back to Home
      </button>
    </Link>
  );
}

export const ToDoProj = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <img className="project-img" src={ToDo} alt="Todo mockup" />
        <div className="project-content-inline">
          <p>
          A To do app built in React and Redux.
            <br />
            <a
              href="https://emilia-todo-app.netlify.app/"
              target="blank">
            View it live
            </a>
          </p>
        </div>
      </div>
      <h2>To Do app</h2>
    </div>
  )
}