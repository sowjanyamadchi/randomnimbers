// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randNum: 0}

  generateRandNum = () => {
    this.setState({randNum: parseInt(Math.random() * 100)})
  }

  render() {
    const {randNum} = this.state
    return (
      <div className="randomNumberGenerator-bg-container">
        <div className="randomNumberGenerator-container">
          <h1 className="randomNumberGenerator-heading">Random Number</h1>
          <p className="randomNumberGenerator-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-btn"
            onClick={this.generateRandNum}
          >
            Generate
          </button>
          <p className="randomNumber">{randNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
