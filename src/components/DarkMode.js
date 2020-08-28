import React from "react"

import darkmode from '../../static/darkmode.png';
import clearmode from '../../static/clearmode.png';
import darkImage from '../../static/memologob.png';
import clearImage from '../../static/memologo.png';
import blackArrows from '../../static/arrows.png';
import whiteArrows from '../../static/arrowsb.png';


class DarkMode extends React.Component {

  state = {
    dark: false,
  }

  toogleMode = _ => {
    if (!this.state.dark) {
      document.body.style.background = "#131415";
      document.body.style.color = "#fff";
      document.querySelector('.logo').src = darkImage;
      document.querySelector('.logo').style.borderColor = '#fff';
      document.querySelector('.darkmode-img').src = clearmode;
      document.querySelector('.darkmode').style.background = '#0f0e0e'
      document.querySelector('.arrows').src = whiteArrows;
      this.setState({ dark: true });
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      document.querySelector('.logo').src = clearImage;
      document.querySelector('.logo').style.borderColor = '#000';
      document.querySelector('.darkmode-img').src = darkmode;
      document.querySelector('.darkmode').style.background = '#f5f5f5'
      document.querySelector('.arrows').src = blackArrows;
      this.setState({ dark: false });
    };
  };

  render() {
    return (
      <button className="darkmode" onClick={this.toogleMode}>
        <img className="darkmode-img" src={ darkmode } alt="darkmode"></img>
      </button>
    )
  }
}

export default DarkMode;
