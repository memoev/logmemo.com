import React from "react"

import DarkMode from "./DarkMode"

import memo from "../../static/rosepen.png"

export default function Ribbon() {
  return (
    <div className="main">
        <span className="hover">
          {/* <img className="logo" src={ memo } alt="logo"></img> */}
          <h2 className="header">hello there!<span role="img" aria-label="rocket">🚀</span></h2>
        </span>
        <DarkMode />
    </div>
  )
}
