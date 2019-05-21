import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./style.css";

export default class Form extends Component{


    render() {
        return (
            <div className="form-tarefa">
                <form id="form-tarefa" className="form-group">
                    <div>
                        <label>Título</label>
                        <input type="text" id="titulo-tarefa" className="form-control form-control-lg"></input>
                    </div>

                    <div>
                        <label>Descrição</label>
                        <textarea type="text" id="descricao-tarefa" className="form-control form-control-lg"></textarea>
                    </div>
                    <div className="buttons">
                        <Link to="/" className="btn btn-danger" >Cancelar</Link>

                        <Link to="/" className="btn btn-success btn-adicionar">Adicionar</Link>
                    </div>
                    
                    

                </form>
            </div>
        );
    }
}