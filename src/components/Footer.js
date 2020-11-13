import React from "react";

import github from '../../static/github.png'
import twitter from '../../static/twitter.jpg'
import linkedin from '../../static/linkedin.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="center">
        <a href="https://github.com/memoev"><img className='footer-img' src={ github } alt='github'></img></a>
        <a href="https://twitter.com/memoevh"><img className='footer-img' src={ twitter } alt='github'></img></a>
        <a href="https://www.linkedin.com/in/guillermovillalta/"><img className='footer-img' src={ linkedin } alt='github'></img></a>
      </div>
    </footer>
  )
}