import { act } from "react-dom/test-utils"

const initial_state={
   cityname:"delhi"

}

const reducer=(state=initial_state,action)=>{
   if(action.type=="getCity"){
      return{
         ...state,
         cityname:action.data
      }
      
      
   }
   return state

}
export default reducer