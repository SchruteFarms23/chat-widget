import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Messages from '../Messages';

const chatListStyle = {
  padding: '30px 30px 20px',
  borderBottom: '5px solid white',
  overflowY: 'scroll',
  height: '400px'
}

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

class ChatListContainer extends Component{


  componentDidUpdate() {
    scrollToBottom()
  }


  render(){
    console.log(this.props)
    return(
      <div id="messages" style={chatListStyle} >
        <Messages list={this.props.list} />

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    list: state.list.chatList
  }
}

export default connect(mapStateToProps)(ChatListContainer);
