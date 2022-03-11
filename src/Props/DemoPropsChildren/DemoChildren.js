import React, { Component } from 'react'

export default class DemoChildren extends Component {
  render() {
    return (
      <div>
      {/* dùng để hiển thị nội dung giữa 2 tag component con bên component cha */}
        {this.props.children}
      </div>
    )
  }
}
