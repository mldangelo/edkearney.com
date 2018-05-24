import React, { Component } from 'react';
import moment from 'moment';
import leftPad from 'left-pad';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    const endTime = moment('07/25/2018 17:00:00', 'MM/DD/YYYY hh:mm:ss'); //.format('x')
    this.state = {
      end: moment('07/25/2018 17:00:00', 'MM/DD/YYYY hh:mm:ss'),
      now: Date.now(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 2);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  getTime() {
    const duration = moment.duration(this.state.end.diff(this.state.now));
    const days = Math.floor(duration.as('days'));
    const hours = Math.floor(duration.as('hours') % 24);
    const minutes = Math.floor(duration.as('minutes') % 60);
    const seconds = Math.floor(duration.as('seconds') % 60);
    const ms = Math.floor(duration.as('milliseconds') % 1000);
    return { days,
      hours:  leftPad(hours,2,0),
      minutes: leftPad(minutes,2,0),
      seconds: leftPad(seconds,2,0),
      ms: leftPad(ms,3,0) };
  }

  tick() {
    const end = this.state.end;
    this.setState({
      now: Date.now()
    });
  }

  render() {
    const { days, hours, minutes, seconds, ms } = this.getTime();
    return (
      <div className = "timer">
       <div className="container">
        <p> {days} days, {hours} hours, {minutes} minutes, {seconds} seconds, {ms} milliseconds.</p>
      </div>
      </div>

    );
  }
}

export default App;
// july 25th
