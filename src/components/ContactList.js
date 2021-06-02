import React from "react";
import ContactCard from "./ContactCard";
// export default class ContactList extends React.Component{
//     render(){
//         return(
//             <></>
//         )
//     }
// }
const ContactList = (props) =>{
    console.log(props.contacts);
    const deleteContact =(id) =>{
        props.getContactid(id);
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
           <ContactCard contactdetails={contact} clickHandler={deleteContact} key = {contact.id}/>
        )
    })
    return(
        <div 
            className="ui celled list" 
            style={{backgroundColor:"hotpink"}}>
            <h2 style={{color:"white", backgroundColor:"blue",padding:"10px"}}>Contact List</h2>
            {renderContactList}
        </div>
    )
}
export default ContactList;