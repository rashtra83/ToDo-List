import React, { useState } from 'react';
import './App.css';
import Component from './Component';

function App() {

  const [Item, setItem] = useState();
  const [List, setList] = useState([]);

  const itemName = (event) => {
    setItem(event.target.value);
  }

  const addItems = () => {
    if (Item !== '')
      setList((previous) => {
        return [...previous, Item];
      });
    else
      alert('Field is Empty!!')
    setItem('');
  }

  const clearAll = () => {
    setList([]);
  }

  const deleleItem = (id) => {
    console.log('deleted');
    setList((previous) => {
      return previous.filter((value, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="outer_div">
      <div className="inner_div">
        <br></br>
        <h1>ToDo List</h1>
        <br></br>
        <div className="input_div">
          <input type="text" placeholder="Add Items" value={Item} onChange={itemName} />
          <button className="button1" onClick={addItems}>+</button>
          <button className="button12" onClick={clearAll}>CLEAR ALL</button>
        </div>
        <div className="todo_div">
          <ol>
            {List.map((val, index) => {
              return <Component value={val}
                key={index}
                id={index}
                del={deleleItem} />
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
