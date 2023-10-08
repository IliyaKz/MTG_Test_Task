import './Header_Content.css'
import Watch from '../Watch/Watch'
import React, { Component } from 'react'
import Sun from '../../../assets/sun.png'
import Lang_Select from '../Lang_Select/Lang_Select'

export default class Header_Content extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header-content'>
          <Lang_Select />
          <img className='header-img' src={Sun} alt='Sun img'></img>
          <Watch />
        </div>
      </header>
    )
  }
}
