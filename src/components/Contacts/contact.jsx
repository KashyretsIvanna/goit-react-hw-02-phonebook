const { Component } = require("react");

class Contact extends Component{

    
    render(){
        const {id}=this.props.contact;
        return(
            <li>{this.props.name+" "+this.props.number}<button onClick={()=>{this.props.onDelete(id)}}>del</button></li>
        )
    }
}

export default Contact;