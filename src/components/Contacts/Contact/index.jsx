import { Component } from "react";
import styles from "./index.module.css"

class Contact extends Component{

    
    render(){
        const {id}=this.props.contact;
        return(
            <li className={styles.li}>{this.props.name+": "+this.props.number}<button className={styles.button} onClick={()=>{this.props.onDelete(id)}}>Delete</button></li>
        )
    }
}

export default Contact;