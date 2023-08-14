import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="bg-con">
        <div className="con">
          <div className="cal-con">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the Phrase
              </label>
              <input
                className="input"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the Phrase"
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="count">No.of letters: {inputPhrase.length}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
