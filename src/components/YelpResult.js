import React from 'react'

const YelpResult = ({details}) =>{
  console.log(details)
  return(
    <div className="card">
      <img src={details.image_url} alt="Avatar" style={{width:"80%"}}/>
        <div className="container">
          <h4><b>{details.name}</b></h4>
        </div>
    </div>
  )
}

export default YelpResult;
