const { Component } = require("react");

class Contact extends Component{
    render(){
        return(
            <li>{this.props.name+" "+this.props.number}</li>
        )
    }
}

export default Contact;