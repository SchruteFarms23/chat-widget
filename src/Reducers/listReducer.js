export default function listReducer(state={chatList:[{type:"bot", message:"Hi, how can I help you today dfdsafhsalfkhdksflhdsaljkfhdshfdsf dsflkjhdsfhdsfhlsakfh lhkjdsfhdsfkljadsfhdslkf hfdshjfdsfhkjashkjf fsfdfd fgdfgfdg gfdgfdgds gggs?"},{type:"user", message:"I want to know my bill statement d fsdf fsdfasf fsdfdsaf fdsfsdf fdsfas fsdf assdf sadfdf fdsfadsfas fsf ds fsfsafdfds fdsfsdafs dsdfsffaa sfsafsfd safsdfsadf sfsdfasfds fsdaf safsd fsasfdsds"}]},action){
  switch(action.type){
    case "ADD_USER_MESSAGE":
      return{
        ...state, chatList:[...state.chatList,action.payload]
      }
    default:
      return state;
  }
}
