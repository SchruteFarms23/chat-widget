import React from 'react'

const header = {
  padding: '20px',
  borderBottom: '5px solid white',
  backgroundColor: '#40b4e5',
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
  color: '#FFFFFF'
}

const WidgetHeader = () => {
  return(
    <div style={header} >
       Chat Widget
    </div>
  )
}

export default WidgetHeader;
