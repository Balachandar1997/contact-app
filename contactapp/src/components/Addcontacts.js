import React, { Component } from 'react'
import '../App.css'

export class Addcontacts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         email:''
      }
    }

    add=e=>{
        e.preventDefault()
        if(this.state.name===""||this.state.email==="")
        {
            alert("All fields are mandatory")
        }
        this.props.addContactHandler(this.state)
        this.setState({name:'',email:''})
    }
  render() {
    return (
      <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
            <div className='field'>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" placeholder='Name' value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
            </div>
            <div className='field'>
                <label htmlFor='name'>Email</label>
                <input type="text" id="name" placeholder='Name' value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
            </div>
            <button type="submit" className='ui button green'>Add</button>
        </form>
      </div>
    )
  }
}

export default Addcontacts