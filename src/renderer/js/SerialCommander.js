let SerialPort = require("serialport").SerialPort

export class SerialCommander {
  constructor () {
    this.openPort();
  }
  openPort () {
    this.baudrate = 9800;
    this.portName = "/dev/tty.usbmodem1422";
    this.serialPort = new SerialPort(this.portName, {
      baudrate: this.baudrate
    })
  }
  sendCommand(command) {
    this.serialPort.write(command, function(err, results) {});
  }
  sendTouchCommand() {
    this.sendCommand('a');
  }
  sendLeaveCommand() {
    this.sendCommand('b');
  }
}
