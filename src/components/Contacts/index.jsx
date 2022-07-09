import { Component } from "react";
import styles from "../Contacts/index.module.css"
import Contact from "./contact";


class Contacts extends Component{
    
        
    render(){
        const {filter,contacts}=this.props;
        
        return(
            <div>        
        
                <ul className={styles.contacts}>
                    
                    {contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map((contact) => {                    
                        return (<Contact 
                                    onDelete={this.props.onDelete}
                                    key={contact.id} 
                                    number={contact.number} 
                                    name={contact.name}
                                    contact={contact}/>) 
                    })}
                    
                </ul>
            </div>
            
        )
        
    }
}
export default Contacts;