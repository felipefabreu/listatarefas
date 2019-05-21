import React, { Component } from 'react';

import "./style.css";

export default class Tasklist extends Component{

    state = {
        tasks: [
            {
                title: "Tarefa 1", description: "Fugiat nostrud sint ipsum voluptate aliqua cupidatat culpa."
            },
            {
                title: "Tarefa 2", description: "Irure veniam do consectetur dolore reprehenderit amet velit exercitation incididunt consequat cillum irure nisi. Veniam aute id eu reprehenderit voluptate quis culpa et anim magna duis tempor velit. Magna proident aute reprehenderit ea velit veniam ut esse. "
            }
        ]
    };

    render() {

        const { tasks } = this.state;

        return (
            <div className="list-group">
                {tasks.map(function (task) {
                    return (
                    <label className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="m-1">{task.title}</h5>
                            <small>
                                <input type="checkbox"></input>
                            </small>
                        </div> 
                        <p className="mb-1">{task.description}</p>
                    </label>
                    );
                })}


                
            </div>
        );
    }
}