import React, {Component} from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      removedItems: []
    };
  }

  handleAddItem = (e) => {
    if(this._inputElement.value !== ""){
      //newItem will store an object containing text and key
        //_inputElement is an object from the DOM
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      //set state items property by concating newItem object into the existing state
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      console.log(this.state.items);
      //clear input value
      this._inputElement.value="";
    }

    e.preventDefault();
  }

  handleDeleteItem = key => {
    //return filtered array of all non-deleted items
    const filteredItems = this.state.items.filter((item) =>{
      return (item.key !== key);
    });
    //filter the removedItem
    const removedItem = this.state.items.filter((item) =>{
      return (item.key === key);
    });

    //console.log(removedItem);

    //update state with new items to display and items that were deleted
    this.setState((prevState) => {
      return {
        items: filteredItems,
        removedItems: prevState.removedItems.concat(removedItem)
      };
    });
  }

  render(){
    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.handleAddItem}>
            <input ref={(a)=>this._inputElement = a} placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems delete={this.handleDeleteItem}
                    entries={this.state.items}
                    removedEntries={this.state.removedItems}/>
      </div>
    );
  }
}

export default TodoList;
