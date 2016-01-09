'use strict';

import React from 'react';
import shell from 'shell';

import {SerialCommander} from '../js/SerialCommander'
let serialCommander = new SerialCommander;

export class Main extends React.Component {
  state = {
    message: 'デレラジコマンダー'
  }
  constructor () {
    super();
  }
  onMouseDown () {
    serialCommander.sendTouchCommand()
  }
  onMouseUp () {
    serialCommander.sendLeaveCommand()
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <div className="title"></div>
          <div className="button-container">
            <div className="button" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}></div>
            <div className="button" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}></div>
            <div className="button" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}></div>
            <div className="button" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}></div>
            <div className="button" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}></div>
          </div>
        </div>
      </div>
    );
  }
}
