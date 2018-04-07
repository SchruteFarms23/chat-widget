import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import WidgetHeader from '../WidgetHeader'

const container = {
  width: '490px',
  height: '500px',
  background: '#F2F5F8',
  borderRadius: '10px',
  margin: 'auto',
  marginTop: '50px',
  color: '#00CED1',
  font: '20px Ubuntu, sans-serif'
}

export default class WidgetContainer extends Component{
  render(){
    return(
      <div style={container}>
        <WidgetHeader />
      </div>
    )
  }
}
