import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tasklist from '../../components/tasklist';

import "./style.css";

export default class Main extends Component{


    render() {
        return (
            <div className="lista-tarefas">
                
                <Tasklist />    
                
                <Link to="/task" className="btn btn-new-task">Nova tarefa</Link>
                
            </div>
        );
    } 

}

