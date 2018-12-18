const initialState = {
    username:"",
    email:"",
    password:"",
    isLoading: false

  
}
function formReducer (state = initialState , action) {

switch (action.type) {
    case "USER_REGISTER":{
    return {...state,...action.user}
        }
        case "USER_SPINNER":{
            return{...state, isLoading: true}
 }

        default:
        return state
        }
        

}

export default formReducer;