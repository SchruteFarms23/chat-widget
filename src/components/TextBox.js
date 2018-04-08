import React, {Component} from 'react'
import { connect } from 'react-redux';

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
  
  send = (e) =>{
    if(e.key === 'Enter'){
      console.log(e.target.value,this.state.message, "it worked")
      this.setState({
        message: ""
      })
    }
  }
  render(){
    return(
      <div style={sectionPadding} >
        <textarea  style={textAreaStyle} placeholder="Type message here" rows="3" value={this.state.message} onKeyPress={this.send} onChange={this.handleChange}>
        </textarea>
        <button> SEND </button>
      </div>

    )
  }
}

export default connect()(TextBox);
