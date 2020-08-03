import React, { Component } from 'react'
import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';


export default class TodoItem extends Component {
    render() {

        const {title, handleDelete, handleEdit} = this.props;


        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span onClick={handleEdit}><Create className="mx-2 text-success"></Create></span>
                    <span onClick={handleDelete}><Delete className="mx-2 text-danger" ></Delete></span>
                </div>
            </li>
        )
    }
}
