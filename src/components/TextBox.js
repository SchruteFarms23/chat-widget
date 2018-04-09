import React, {Component} from 'react'
import { connect } from 'react-redux';
import {addUserMessage,addBotMessage} from '../actions/messageActions'

const sectionPadding ={
  padding: '20px'
}

const textAreaStyle = {
  width: '100%',
  border: 'none',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  resize: 'none'
}
class TextBox extends Component{

  state = {
    message: ""
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const time = new Date()
    console.log(time.getHours())
    const userMessage = this.state.message
    const botMessage = "Thanks for asking!"
    this.props.addUserMessage(userMessage)
    this.props.addBotMessage(botMessage)
    this.setState({
          message: ""
    })
  }

  render(){
    return(

      <div style={sectionPadding} >
        <form onSubmit={this.handleSubmit}>
          <textarea  style={textAreaStyle} placeholder="Type message here" rows="3" value={this.state.message} onKeyPress={(e) => {if(e.key === 'Enter'){this.handleSubmit(e)}}} onChange={this.handleChange} />
          <button type="submit" value="Submit"> SEND </button>
        </form>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    addUserMessage: (message) => {
      dispatch(addUserMessage(message))
    },
    addBotMessage: (message) => {
      dispatch(addBotMessage(message))
    }
  }
}

export default connect(null,mapDispatchToProps)(TextBox);
