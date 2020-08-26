import React from "react"

export default function SubForm() {
  return (
    <form name="contact">
      <input type="hidden" />
      <h3>Don't be a stranger!</h3>
      <p>
        I'm all about new and old tech. Let’s talk about geeky stuff or building something together.
              </p>
      <div>
        <label>
          <b>email:</b>
          <input type="email" name="email" placeholder="johndoe@me.com"/>
        </label>
        <button name="button" type="submit">submit</button>
      </div>
    </form>
  )
}