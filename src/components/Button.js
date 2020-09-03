import React from "react"
import { Link } from "gatsby"


export default function Button({ to, children }) {
    const styles = {
        display: 'inline-block',
        color: '#00897b',
        border: 'none',
        background: '#00db8b',
        borderRadius: '1em',
        padding: '10px',
        cursor: 'pointer',
        margin: '10px'
    }

    return (
    to ? (
    <Link to={to} style={styles}>{ children }</Link>
    ) : (
    <button style={styles}>{ children }</button>
    )
  )
}