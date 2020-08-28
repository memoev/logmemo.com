import React from "react"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Ribbon from "../components/Ribbon"

export default function Home() {
  return (
    <>
      <NavBar />
      <Ribbon />
      <div className="me">
        <p>
          <b>Hi!</b> <span role="img" aria-label="hand">🖖🏽</span> 
        </p>
        <p>
          My name is Guillermo Villalta. I'm a software developer trying to share and document my journey throughout web development.
        </p>
        <p>
          This is a personal space where I'm planning to share my notes, thoughts and articles about anything that revolves around technology and programming.
        </p>
      </div>
      <Footer />
    </>
  )
}
