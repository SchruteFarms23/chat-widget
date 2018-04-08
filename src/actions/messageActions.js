export default function addUserMessage(message){
  return{
    type:"ADD_USER_MESSAGE",
    payload: {type:'user', message:message}
  }
}
