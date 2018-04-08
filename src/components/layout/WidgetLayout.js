import React from 'react'
import WidgetHeader from '../WidgetHeader'
import ChatListContainer from '../containers/ChatListContainer'
import TextBox from '../TextBox'

const container = {
  width: '490px',
  background: '#F2F5F8',
  borderRadius: '10px',
  margin: 'auto',
  marginTop: '50px',
  font: '20px Ubuntu, sans-serif'
}

const WidgetLayout = () => {
    return(
      <div style={container}>
        <WidgetHeader />
        <ChatListContainer />
        <TextBox />
      </div>
    )
}

export default WidgetLayout;
