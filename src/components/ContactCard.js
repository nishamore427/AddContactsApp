import React from "react";
import user from '../images/user.jpg';
const ContactCard = (props) =>{
    const {id,name,email} = props.contactdetails; 
    return(
        <div 
            // className='item' 
            class="ui left aligned container item" style={{paddingTop:"10px",margin:"10px"}}>
        <img className="ui avatar image" src={user} alt="user" style={{fontSize:"24px",border:"2px solid white"}}/>
        <div className="content">
            {/* <div>{id}:</div> */}
            <div className="header" style={{paddingBottom:"5px"}}>
            <label style={{fontSize:"20px"}}>Name:<span style={{color:"white"}}>{name}</span></label>
            </div>
            <div className="header">
            <label style={{fontSize:"20px"}}>email:{email}</label>
            </div>
        </div>
        <i 
            className="trash alternate outline icon ui right aligned container" 
            // class="ui right aligned container "
            style = {{ color:"yellow" , marginTop : "7px",fontSize:"20px"}}
            onClick = {()=>{
                props.clickHandler(id)
            }}
        ></i>
    </div>
    )
}
export default ContactCard;
