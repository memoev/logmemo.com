import React from "react"

import darkmode from '../../static/darkmode.png'
import darkImage from '../../static/memologob.png'
import clearImage from '../../static/memologo.png'


class DarkMode extends React.Component {

  state = {
    dark: false,
  }

  toogleMode = _ => {
    if (!this.state.dark) {
      document.body.style.background = "#000";
      document.body.style.color = "#fff";
      document.querySelector('.logo').src = darkImage;
      document.querySelector('.logo').style.borderColor = '#fff'
      this.setState({ dark: true });
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      document.querySelector('.logo').src = clearImage;
      document.querySelector('.logo').style.borderColor = '#000'
      this.setState({ dark: false });
    };
  };

  render() {
    return (
      <button className="darkmode" onClick={this.toogleMode}>
        <img className="darkmode" src={ darkmode } alt="darkmode"></img>
      </button>
    )
  }
}

export default DarkMode;
