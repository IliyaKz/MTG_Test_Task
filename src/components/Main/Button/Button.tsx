import './Button.css'
import React, { Component } from 'react'
import { buttonPropsType } from '../../../utils/types'

export default class Button extends Component<buttonPropsType> {
  render() {
    return (
      <button 
        className='pagination-button'
        onClick={this.props.onClick}
        disabled={this.props.isDisable}
      >
        {this.props.content}
      </button>
    )
  }
}
