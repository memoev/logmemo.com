import React from "react"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Ribbon from "../components/Ribbon"
import Button from "../components/Button"

export default function Home() {
  return (
    <>
      <NavBar />
      <Ribbon />
      <div className="me">
        <p>
          <b>Hello!</b> <span role="img" aria-label="hand">🖖🏽</span> 
        </p>
        <p>
          My name is Guillermo and I'm a software developer trying to share and document my journey throughout web development. This is a space where I'll be dropping notes, thoughts and articles about anything that revolves around technology and programming that I find relevant.
        </p>
        <p>
          Software developing can become complex and overwhelming task sometimes, but a fun and gratifying duty in the long run. 
        </p>
        <p>
          Something that works a lot for me when trying to learn something new is writting down stuff <span role="img" aria-label="light-bulb">💡</span>, since memory is a limited and valued resource. That's the main reason why I'm creating this website.
        </p>
        <p>
          Most things I write are not meant to be professional heavy documents or papers, but just a set of key words that make sense with some examples, which allows me to link things in my head.
        </p>
        <p>
          I have a couple of personal projects going on, you can check them out <a href="https://github.com/memoev">here</a>. Also feel free to reach out via <a href="mailto:memoevh@gmail">email</a> or <a href="https://twitter.com/memoevh">twitter</a>.
        </p>
      </div>
      <div style={{textAlign: "center"}}>
        <Button to="/blog">Browse Articles</Button>
      </div>
      <Footer />
    </>
  )
}
