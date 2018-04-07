import React, {Component} from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';

const chatListStyle = {
  borderBottom: '5px solid white',
  overflowY: 'scroll',
  height: '400px'
}

class ChatListContainer extends Component{
  render(){
    console.log(this.props)
    return(
      <div style={chatListStyle} >
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
