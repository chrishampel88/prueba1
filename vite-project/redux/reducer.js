import { GET_CHARACTERS } from "./actions";


const initialState={
  
 characters:[
    {id:1, name:'chris'},
    {id:2, name:'any'},
    {id:3, name:'nico'},
    {id:4, name:'Sofi'}
],
contador:0

}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CHARACTERS:
            return {...state,characters:action.payload}

        default:
            return{...state}
    }
}

export default rootReducer;