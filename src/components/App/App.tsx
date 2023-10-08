import React, { Component } from 'react'
import './App.css'
import Main_Content from '../Main/Main_Content/Main_Content'
import Header_Content from '../Header/Header_Content/Header_Content'

export class App extends Component {

  render() {
    return (
      <div className='app-container'>
        <Header_Content />
        <Main_Content />
      </div>
    )
  }
}