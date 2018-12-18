

const Register = (user) => {

    const api_reg ="http://144.202.111.131:3001/register"


fetch( api_reg ,
    {

        method : "POST",
        headers:{
            'Content-Type':'application/json',

        },

        body:JSON.stringify({
            "name":user.username,
            "email": user.email,
            "password":user.password
    })
    
})

.then((res)=>{
    if(res.ok){
        res.json().then((responseJson)=>{
            localStorage.setItem("token",responseJson.data.token)

        })
 }

    else {
        console.log(res)
        localStorage.removeItem('token')
        
    }
})



}


export {Register}