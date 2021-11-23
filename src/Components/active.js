import React from 'react'
//import Button from 'react-bootstrap/Button'


class Active extends React.Component{
    constructor(){
        super()
        this.state={
            activity:{
                active:false,
                inactive:false
            } 
        }
        this.handleChange=this.handleChange.bind(this)
        }
  handleClick(){
               console.log("clicked")
           }  
  handleChange(event){
      
      let state=this.state;
      state.activity[event.target.value]=event.target.checked;
      this.setState(state);
      console.log(this.state.activity);
  }
 render(){
        return (
                <div className="activate">
        <h2>Your active projects.</h2>
        <label>
        <input 
        type="checkbox"
        name="activity"
        value="active"
        checked={this.state.activity.active}
        onChange={this.handleChange}/>
        BEE LSS
        <br/>
        <input
        type="checkbox"
        name="activity"
        value="inactive"
        checked={this.state.activity.inactive}
        onChange={this.handleChange}/>
        MPAMBE PROJECT
        </label>
        <br/>
        <button onClick={this.handleClick}
        style={{backgroundColor:"lightslategrey",border:"translucent"}}>
        Start task
        </button>
                </div>
            )
    }
  }

export default Active

