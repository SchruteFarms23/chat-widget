export default function listReducer(state={chatList:[{type:"bot", message:"Hi, how can I help you today?"},{type:"user", message:"I want to know my bill statement"}]},action){
  switch(action.type){
    default:
      return state;
  }
}
