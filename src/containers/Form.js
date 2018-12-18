import React , { Component } from 'react'
import {connect} from 'react-redux'
import BUTTONS from "../components/buttons"
import INPUT from "../components/input"
import {registerformSubmit} from '../actions'

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={

          username: null,
         email:null ,
         password:null

        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {onSubmit}=this.props
  
        const {username, password, email} = this.state;
         
        onSubmit(username,email,password)  

      
    }



 handleChange =(e)=> {
     let value = e.target.value;
     let name = e.target.name;
        this.setState ({[name]:value }, () => console.log(this.state))
    }



     
render()
{
    return(
<div>
        <INPUT  NAME={this.props.username} EMAIL={this.props.email} PASSWORD={this.props.password}  USERNAME={this.handleChange}   USEREMAIL={this.handleChange}  USERPASSWRD={this.handleChange}/>

        <BUTTONS   btnAction ={this.handleSubmit}/>
</div>


    )
}
}

const mapStateToProps =(state)=>{
    return{
username: state.form.username,        
email: state.form.email,
password: state.form.password
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        onSubmit : (username,email,password) => {
            console.log(username, email, password);
            dispatch(registerformSubmit(username,email,password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)
 


