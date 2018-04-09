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

export function addBotYelpMessage(message){
  return{
    type:"ADD_BOT_YELP_MESSAGE",
    payload:{type:'yelp'}
  }
}
