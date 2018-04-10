export function addUserMessage(message){
  return{
    type:"ADD_USER_MESSAGE",
    payload: {type:'user', message:message}
  }
}

export function addBotMessage(message){
  return{
    type:"ADD_BOT_MESSAGE",
    payload: {type:'bot', message:message}
  }
}

export function addBotYelpMessage(yelpResults){
  return{
    type:"ADD_BOT_YELP_MESSAGE",
    payload:{type:'yelp',message:yelpResults} //make sure this is ok
  }
}


export function fetchYelpResults(params){
  return function(dispatch){
      const body= JSON.stringify(params)
      fetch("http://localhost:3000/api/v1/yelps/fetch",{
        method: 'post',
        body: body,
        headers: {
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      })
      .then(res => res.json())
      .then(yelpResults => dispatch(addBotYelpMessage(yelpResults)))
  }
}
