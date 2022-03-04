import React, { Component } from 'react'
import DemoChildren from './DemoChildren'

export default class DemoPropsChildren extends Component {
  render() {
    return (
      <div>
        <h3>Demo về props children</h3>
        <DemoChildren>
          <p>Hello cybersoft</p>
        </DemoChildren>
      </div>
    )
  }
}
