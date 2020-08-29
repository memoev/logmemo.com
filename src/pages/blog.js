import React from "react"

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Ribbon from "../components/Ribbon";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
        <NavBar />
        <Ribbon />
        <div style={{textAlign: "center"}}>
        <Button to="/">Go Back</Button>
        </div>
        <Footer />
    </>
  )
}
