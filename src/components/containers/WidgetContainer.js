import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const container = {
  width: '490px',
  height: '500px',
  background: '#ADD8E6',
  borderRadius: '10px',
  margin: 'auto',
  marginTop: '50px',
  color: '#00CED1'
}

export default class WidgetContainer extends Component{
  render(){
    return(
      <div style={container}>
        Hello
      </div>
    )
  }
}
