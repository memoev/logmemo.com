import React from "react";
import Button from "../components/Button";

export default function SubForm() {
  return (
    <>
      <hr />
      <form name="reach" method="POST" data-netlify="true">
        <input type="hidden" />
        <h3>Don't be a stranger!</h3>
        <p>
          I'm all about new and old tech, please reach out. I'm happy to chat, collaborate and learn.
        </p>
        <div className="user-input">
          <label>
            <div className="label-name"><b>name:</b></div>
            <input type="name" name="name" placeholder="John"/>
          </label>
          <label>
            <div className="label-name"><b>email:</b></div>
            <input type="email" name="email" placeholder="johndoe@me.com"/>
          </label>
          <Button name="button" type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}