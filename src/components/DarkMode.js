import React from "react"
import darkmode from '../../static/darkmode.png';
import useDarkMode from 'use-dark-mode';


export default function DarkMode() {

  const darkMode = useDarkMode(true);

  return (
    <button className="darkmode" onClick={ darkMode.toggle }>
      <img className="darkmode-img" src={ darkmode } alt="darkmode"></img>
    </button>
  )
}
