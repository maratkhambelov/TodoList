import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "../app-header";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';


const App = () => {
    const toDoData = [
        {label: 'Drink Coffee', important: false, id: '1'},
        {label: 'Build Awesome App', important: true, id: '2'},
        {label: 'Have a lunch', important: false, id: '3'}
    ]
    return(
        <div className="todo-app">
            <AppHeader/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={toDoData}/>
        </div>
    )
}
export default App;