import React from "react"

import Button from "../components/Button"
import SubForm from "../components/SubForm"

export default function Home() {
  return (
    <>
      <div className="me">
        <p>
          <b>Hello!</b> <span role="img" aria-label="hand">🖖</span> 
        </p>
        <p>
          My name is Guillermo and I'm a software developer trying to document and share my journey throughout web development. This is a space where I'll be dropping notes, thoughts and articles about anything I find relevant revolving around technology and programming.
        </p>
        <p>
          Software developing can become complex and a overwhelming task at times, but a fun and gratifying duty in the long run. Since memory is a limited and valued resource, something that works a lot for me when trying to learn new things is writting down stuff <span role="img" aria-label="light-bulb">💡</span>, and that's the main reason why I'm creating this website, leaving my old one behind, I wanted something more simple and personal.
        </p>
        <p>
          Most things I write are not meant to be professional documents or heavy detailed papers, but just a set of key words that make sense which allows me to link things in my head, along some examples.
        </p>
        <p>
          I have a couple of personal projects going on, you can check them out <a href="https://github.com/memoev">here</a>. Also feel free to reach out via <a href="mailto:memoevh@gmail">email</a> or <a href="https://twitter.com/memoevh">twitter</a>. I'm working towards being more responsive!
        </p>
      </div>
      <div style={{textAlign: "center"}}>
        <Button to="/blog">Browse Articles</Button>
      </div>
      <SubForm />
    </>
  )
}
