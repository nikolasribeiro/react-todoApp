import React, { Component } from 'react'
import Book from '@material-ui/icons/Book';


export default class TodoInput extends Component {
    render() {

        const {item, handleChange, handleSubmit, editItem} = this.props;


        return (

            <div className="card card-body my-3">
                <form  onSubmit={handleSubmit}>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <Book></Book>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add Task" value={item} onChange={handleChange}/>
                    </div>
                    
                    <button type="submit" className={ editItem ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3' }> { editItem ? 'Edit Task' : 'Add Task' } </button>

                </form>        
            </div>
        )
    }
}
