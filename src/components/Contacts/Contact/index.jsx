import { Component } from "react";
import styles from "./index.module.css"
import PropTypes from "prop-types"

class Contact extends Component{
    
    static propTypes={
        onDelete:PropTypes.func,
        number:PropTypes.string,
        name:PropTypes.string,
        contacts:PropTypes.array
    }
    
    render(){
        const {id}=this.props.contact;
        return(
            <li className={styles.li}>{this.props.name+": "+this.props.number}<button className={styles.button} onClick={()=>{this.props.onDelete(id)}}>Delete</button></li>
        )
    }
}

export default Contact;