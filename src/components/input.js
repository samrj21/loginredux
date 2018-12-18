import React from 'react'

 const INPUT =(props)=>{
     return(
         <div>
<div>
 <input  type= "text" name = "username" placeholder ="enter your username" value={props.username} onChange={props.USERNAME}></input>
</div>

<div>
 <input type= "text" name="email" placeholder ="enter your email" value={props.email} onChange={props.USEREMAIL}></input>
</div>

<div>
 <input type= "text" name = "password" placeholder ="enter your password" value={props.password} onChange={props.USERPASSWRD}></input>
</div>


         </div>
     )
 }

 export default INPUT