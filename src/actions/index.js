
import {Register} from '../services/regService'


export const registerformSubmit =(username,email,password)=>{
    let user = {
        username:username,
        email:email,
        password:password
     }
    return dispatch =>{
        dispatch(spinnerlogin(user))
        dispatch(adduser(user))
    }
}


export const spinnerlogin =(user)=>{
    return{
        type: "USER_SPINNER"
    }
}



export const adduser = (user) => {
   console.log(user)
    Register(user)
    
  return{
      type: "USER_REGISTER",
      user:user
  }
}
