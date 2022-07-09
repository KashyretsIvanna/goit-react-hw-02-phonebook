import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Contacts from "./Contacts";
import Filter from "./Contacts/filter";


class App extends Component{
  

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    
    filter:'',
    
  }

  
  handleSubmit=(name,number)=>{
    
    
      let loginInputId=nanoid();
      this.setState(prevState=>({contacts:[...prevState.contacts,{id:loginInputId,name:name,number:number}]}))
      

      
    
  }

  handleChange=(e)=>{
    this.setState({filter:e.target.value})
  }

  handleDelete=(itemId)=>{
    ;
    this.setState(prev=>({contacts:prev.contacts.filter((el)=>el.id!==itemId)}))
    
  }

  render(){
    const {contacts,filter}=this.state;
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
          textAlign:'center'
        }}
      >
        <h2>Phonebook</h2>
        <Form state={this.state} onSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter onFilter={this.handleChange} filter={this.state.filter} />
        <Contacts onDelete={this.handleDelete} filter={filter} contacts={contacts} />
        
      </div>
    )
  }

  
};
//

export default App;
