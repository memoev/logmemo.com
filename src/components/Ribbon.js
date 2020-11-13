import React from "react"

import DarkMode from "./DarkMode"

import memo from "../../static/rosepen.png"

export default function Ribbon() {
  return (
    <div className="main">
        <span className="hover">
          <img className="logo" src={ memo } alt="logo"></img>
          <span className="header">guillermo's journey into design & development</span>
        </span>
        <DarkMode />
    </div>
  )
}
