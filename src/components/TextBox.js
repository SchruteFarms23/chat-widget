import React, {Component} from 'react'
import { connect } from 'react-redux';
import addUserMessage from '../actions/messageActions'

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
    const message = this.state.message
    this.props.addUserMessage(message)
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
    }
  }
}

export default connect(null,mapDispatchToProps)(TextBox);
