import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="center">
        <Link className="nav-links" to="/">memo</Link>|
        <Link className="nav-links" to="/blog">blog</Link>
      </div>
    </nav>
  )
}