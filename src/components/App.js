import React,{useState ,useEffect} from "react";
import AddContact from './AddContact';
import ContactList from './ContactList';
import {uuid} from 'uuidv4';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContact] = useState([]);
  // const contacts = [
  //   {
  //     id:"1",
  //     "name":"Nisha",
  //     "email":"nisha@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     "name":"Disha",
  //     "email":"disha@gmail.com"
  //   }
  // ];
  
  useEffect(()=>{
    const retrievedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON))
    if(retrievedata){
      setContact(retrievedata);
    }

    
  },[])
  useEffect(()=>{
    
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContact([...contacts,{id:uuid(),...contact}]);
  }
  const removeContact = (id) =>{
    const newList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContact(newList);
  }
  return (
    <div 
      // className="ui container" 
      className="ui one column stackable center aligned page grid"
      style={{paddingTop:"20px"}}>
      <div className="column twelve wide" >
     
     <AddContact  addContactHandler = {addContactHandler}/>
     
     <ContactList contacts = {contacts} getContactid = {removeContact} />
</div>
    </div>
  );
}

export default App;
