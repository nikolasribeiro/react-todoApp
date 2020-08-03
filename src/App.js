import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {

    state = {
        items   : [],
        id      : uuid(),
        item    : "",
        editItem: false,
    }
    
    //Methods
    handleChange = (e)=>{
        this.setState({
            item: e.target.value
        });
    }


    handleSubmit = (e)=>{
        e.preventDefault();

        const newItem = {
            id      :this.state.id,
            title   :this.state.item
        }

        const updatedItem = [...this.state.items, newItem];

        this.setState({
            items   : updatedItem,
            item    : "",
            id      : uuid(),
            editItem: false
        });

        console.log(newItem);
    }


    clearList = ()=>{
        this.setState({
            items:[]
        });
    }

    handleDelete = (id)=>{
        const FilteredItems = this.state.items.filter( item=> item.id !== id );
        
        this.setState({
            items:FilteredItems
        });
    }

    handleEdit = (id)=>{
        const FilteredItems = this.state.items.filter( item=> item.id !== id );
        const selectedItem  = this.state.items.find(item=> item.id === id);

        console.log(selectedItem);

        this.setState({
            items       : FilteredItems,
            item        : selectedItem.title,
            editItem    : true,
            id          : id
        });
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">Todo Input</h3>
                        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} ></TodoInput> 
                        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}></TodoList>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
