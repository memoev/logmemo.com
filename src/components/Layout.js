import React from "react"
import NavBar from "./NavBar"
import Ribbon from "./Ribbon"
import Footer from "./Footer"


export default function Layout({ children }) {
  return (
    <>
        <NavBar />
        <Ribbon />
            <main>{ children }</main>
        <Footer />
    </>
  )
}