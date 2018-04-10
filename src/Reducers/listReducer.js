export default function listReducer(state={chatList:[{type:'bot',message:"Hi welcome to YelpBot! What kind of food are you looking for?"}]},action){
  switch(action.type){
    case "ADD_USER_MESSAGE":
      return{
        ...state, chatList:[...state.chatList,action.payload]
      }
    case "ADD_BOT_MESSAGE":
      return{
        ...state, chatList:[...state.chatList,action.payload]
      }
    case "ADD_BOT_YELP_MESSAGE":
      return{
        ...state,chatList: [...state.chatList,action.payload]
      }
    default:
      return state;
  }
}
