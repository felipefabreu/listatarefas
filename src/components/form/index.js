import React, { Component } from 'react';


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
                    
                    <button className="btn">Adicionar</button>

                </form>
            </div>
        );
    }
}