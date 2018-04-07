import React from 'react'
import WidgetHeader from '../WidgetHeader'
import ChatListContainer from '../containers/ChatListContainer'

const container = {
  width: '490px',
  background: '#F2F5F8',
  borderRadius: '10px',
  margin: 'auto',
  marginTop: '50px',
  color: '#00CED1',
  font: '20px Ubuntu, sans-serif'
}

const WidgetLayout = () => {
    return(
      <div style={container}>
        <WidgetHeader />
        <ChatListContainer />
      </div>
    )
}

export default WidgetLayout;
