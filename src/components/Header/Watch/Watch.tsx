import './Watch.css'
import React, { Component } from 'react'
import { watchPropsType, watchStateType } from '../../../utils/types'

export default class Watch extends Component<watchPropsType, watchStateType> {
  interval!: NodeJS.Timeout
  constructor(props: watchPropsType) {
    super(props),
    this.state = {
      time: ''
    }
  }

  transformTime(value: number): string {
    if (value >= 10) {
      return `${value}`
    }
    return `0${value}`
  }

  getActualTime(): string {
    const actualDate = new Date();
    const hh = this.transformTime(actualDate.getHours());
    const mm = this.transformTime(actualDate.getMinutes());
    const ss = this.transformTime(actualDate.getSeconds());
    return `${hh}:${mm}:${ss}`
  }

  componentDidMount(): void {
    this.interval = setInterval(() => {
      this.setState({
        time: this.getActualTime()
      })
    }, 1000)
  }

  render() {
    return (
      <div className='watch-time'>{this.state.time}</div>
    )
  }
}
