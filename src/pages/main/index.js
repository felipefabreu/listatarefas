import React, { Component } from 'react';


import Form from '../../components/form';
import Tasklist from '../../components/tasklist';

export default class Main extends Component{


    render() {
        return (
            <div className="lista-tarefas">
                <Form />
                <Tasklist />
            </div>
        );
    } 

}

