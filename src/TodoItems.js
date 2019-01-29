import React, {Component} from 'react';
import FlipMove from "react-flip-move";

class TodoItems extends Component{
  handleDelete = (key) => {
    return this.props.delete(key);
  }
  //return a list item
  createTasks = item => {
    return(
      <li onClick={() => this.handleDelete(item.key)}
          key={item.key}>{item.text}</li>
    );
  }

  createRemovedTasks = item => {
    return(
      <li className="removedItem"
          key={item.key}>{item.text}</li>
    );
  }

  render(){
    const todoEntries = this.props.entries;
    //run through each entry, making a new array of list items
    const listItems = todoEntries.map(this.createTasks);

    const removedEntries = this.props.removedEntries;
    const removedItems = removedEntries.map(this.createRemovedTasks);


    return(
      <ul className="theList">
        <FlipMove duratin={300}
                  easing="ease-out">
          {listItems}
          {removedItems}
        </FlipMove>
      </ul>
    )
  }
}

export default TodoItems;
