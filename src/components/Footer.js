import React from "react"

import github from '../../static/github.png'
import twitter from '../../static/twitter.jpg'
import linkedin from '../../static/linkedin.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="center">
        <img className='footer-img' src={ github } alt='github'></img>
        <img className='footer-img' src={ twitter } alt='github'></img>
        <img className='footer-img' src={ linkedin } alt='github'></img>
      </div>
    </footer>
  )
}