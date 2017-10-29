import React from 'react';
class Mastermind extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    return(
      <div id="ultimate-container">
        <div id="game-box">

          <div id="color-choice-list">
            <h2>Welcome to Mastermind</h2>
            <ul id="color-list">
              <li className="color blue"></li>
              <li className="color red"></li>
              <li className="color purple"></li>
              <li className="color orange"></li>
              <li className="color black"></li>
              <li className="color yellow"></li>
              <li className="color turquoise"></li>
              <li className="color green"></li>
            </ul>
          </div>
          <form>
            <input>

            </input>
          </form>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Mastermind;
