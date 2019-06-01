import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./style.css";

export default class Form extends Component{

    state = {
        task: {
            title: {},
            description: {}
        }
    }

    addTask(task) {
        this.setState = { task };
    }

    

    render() {
        return (
            <div className="form-tarefa">
                <form id="form-tarefa" className="form-group">
                    <div>
                        <label>Título:</label>
                        <input type="text" id="titulo-tarefa" className="form-control form-control-lg"></input>
                    </div>

                    <div>
                        <label>Descrição:</label>
                        <textarea type="text" id="descricao-tarefa" className="form-control form-control-lg"></textarea>
                    </div>
                    <div className="buttons">
                        <Link to="/" className="btn btn-cancelar" >Cancelar</Link>

                        <Link to="/" className="btn btn-adicionar">Adicionar</Link>
                    </div>
                </form>
            </div>
        );
    }
}