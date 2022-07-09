import { Component, Fragment } from "react";
import styles from "../Filter/index.module.css"

class Filter extends Component{
        
    render(){
        const {filter}=this.props.filter;
        return(
            <Fragment>
                <p className={styles.p}>Find contacts by name</p>
                <input 
                    className={styles.input}
                    type="text" 
                    value={filter} 
                    onChange={(e)=>{this.props.onFilter(e)}}/>
            </Fragment>
        )
            
    }
}

export default Filter;


