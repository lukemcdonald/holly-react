import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default Main;
