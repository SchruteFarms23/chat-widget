import React from 'react'

const userMessage = {
      color: 'white',
      padding: '18px 20px',
      lineHeight: '25px',
      fontSize: '16px',
      borderRadius: '20px',
      marginBottom: '30px',
      width: '60%',
      position: 'relative',
      background: '#87CEFA',
      float: 'right',
      textAlign:'left'
}
const botMessage = {
      color: 'white',
      padding: '18px 20px',
      lineHeight: '25px',
      fontSize: '16px',
      borderRadius: '20px',
      marginBottom: '30px',
      width: '60%',
      position: 'relative',
      background: '#83E32F',
      float:'left',
      textAlign:'left'
}



const Message = ({content}) =>{
  return(
      <div className="clearfix" style={content.type === "bot" ? botMessage : userMessage} >
        {content.message}
      </div>
  )
}

export default Message;
