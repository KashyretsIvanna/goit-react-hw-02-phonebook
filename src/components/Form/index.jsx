import { Component } from "react";
import styles from "../Form/index.module.css"


const INITIAL_STATE = {
    name: '',
    number:'',
  }

class Form extends Component{
    state = {
        ...INITIAL_STATE
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.name,this.state.number);
        this.reset();    
    };

    reset=()=>{
    
        this.setState({number:"",name:""})
    }
    
    handleChangeName=(e)=>{
        this.setState({name:e.target.value});
    };
    handleChangeTel=(e)=>{
        this.setState({number:e.target.value});
    }

    render(){
        const {name,number}=this.state;
        return(
            <div className={styles.form}>
                

                <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChangeName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                />

                <br/>

                <input
                    onChange={this.handleChangeTel}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    />
                <br/>

                <button type="submit">Submit</button>
                </form>

            </div>
            
        )
    }
    
};
export default Form;