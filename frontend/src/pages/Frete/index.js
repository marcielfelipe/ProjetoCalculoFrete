import React from 'react';


export default function Frete(){
    return(
        <div>
            <h1 className="Titulo">Calculo</h1>
            <div>
                <input placeholder="Comprimento"></input>
                <input placeholder="Largura"></input>
                <input placeholder="Altura"></input>
                <input placeholder="Valor do Produto"></input>
                <select>
                    <option value="pac">Pac</option>
                    <option value="sedex">Sedex</option>
                    <option value="sedex10">Sedex10</option>
                    <option value="sedex12">Sedex12</option>
                </select>
                <button>Calcular</button>
                <label> </label>
            </div>



        </div>
    );
}