import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state={
      data:[],
      value:'',
      active:null,
      display:'none'
    };
  }

  addItem=()=>{
    this.state.data.push(this.state.value)
    this.setState({
      value:'',
      data:this.state.data
    })
  }

  editingItem = () =>{
    this.setState({
      value:this.state.data[this.state.active],
      display:'block'
    })
  }

  editComplete= () => {
    const newState = this.state.data;
    newState[this.state.active] = this.state.value
    this.setState({
      data:newState,
      value:''
    })
  }
  onElmClick = (e) =>{
    this.setState({
      active:e.target.id
    })
  }
  inputChange = (e) => {
    this.setState({
      ...this.state, value: e.target.value
    })
  }

  deleteItem= () =>{
    const {data} = this.state
    data.splice(this.state.active,1)
    this.setState({
      data:data,
      active:null
    })
  }




  render() {
    console.log(this.state.data.length)
    return (
      <div className="App">
        <div id="myDIV" className="header" >
          <h2>My To Do List</h2>
          <input value={this.state.value} onChange={(e) => this.inputChange(e)} type="text" id="myInput" placeholder="Title..."></input>
          <span onClick={()=>this.editComplete()}style={{display:this.state.display}} className="btnComplete">&#10003;</span>
          <span onClick={()=>this.addItem()} className="addBtn">Add</span>
          <span onClick={() => this.deleteItem() } className="addBtn">Delete</span>
          <span onClick={()=>this.editingItem()}className="addBtn">Edit</span>
          
        </div>

        <ul onClick = {(e) => this.onElmClick(e)}>
          {this.state.data.map((array,index) => <li style={this.state.active == index?{backgroundColor:'red'}:{backgroundColor:''}} key={array} id ={index}>{array}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
