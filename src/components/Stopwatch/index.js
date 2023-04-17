// Write your code here
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    show: false,
    timeSec: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({show: false, timeSec: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({show: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeSec: prevState.timeSec + 1,
    }))
  }

  startTime = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({show: true})
  }

  renderSec = () => {
    const {timeSec} = this.state
    const Sec = Math.floor(timeSec % 60)

    if (Sec < 10) {
      return `0${Sec}`
    }
    return Sec
  }

  renderMin = () => {
    const {timeSec} = this.state
    const time = Math.floor(timeSec / 60)
    if (time < 10) {
      return `0${time}`
    }
    return time
  }

  render() {
    const {show} = this.state
    const time = `${this.renderMin()}:${this.renderSec()}`
    return (
      <div>
        <h1>StopWatch</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <spam>Timer</spam>
          <h1>{time}</h1>
          <div>
            <button type="button" onClick={this.startTime} disabled={show}>
              Start
            </button>
            <button type="button" onClick={this.onStopTimer}>
              Stop
            </button>
            <button type="button" onClick={this.onResetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
