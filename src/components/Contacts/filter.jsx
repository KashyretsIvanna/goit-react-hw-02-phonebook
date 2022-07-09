import { Component, Fragment } from "react";

class Filter extends Component{
        
    render(){
        const {filter}=this.props.filter;
        return(
            <Fragment>
                <p>Find contacts by name</p>
                <input 
                    type="text" 
                    value={filter} 
                    onChange={(e)=>{this.props.onFilter(e)}}/>
            </Fragment>
        )
            
    }
}

export default Filter;


