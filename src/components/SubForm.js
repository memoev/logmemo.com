import React from "react"

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
        <div className="input">
          <label>
            <b>email:</b>
            <input type="email" name="email" placeholder="johndoe@me.com"/>
          </label>
          <button name="button" type="submit">submit</button>
        </div>
      </form>
    </>
  )
}