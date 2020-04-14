import React, {useState} from 'react';
 
import api from '../../services/api';


import './styles.css'

export default function Frete(){
    const [c, setc] = useState('');
    const [l, setl] = useState('');
    const [a, seta] = useState('');
    const [valorMercadoria, setvalorMercadoria] = useState('');
    const [tipo, settipo] = useState('pac');
    const [frete, setfrete] = useState('');

    async function calcular(e){
        e.preventDefault();

        const data = {
            c,
            l,
            a,
            valorMercadoria,
            tipo,
        };

        const response = await api.post('/',data);
        console.log (response);

        setfrete(response.data.frete);

    };


    return(
        <div className="frete-container">         
            <form onSubmit={calcular}>
                <h1>Cálculo de Frete</h1>
                <input 
                    placeholder="Comprimento"
                    value={c}
                    onChange={e => setc(e.target.value)}
                />
                <input 
                    placeholder="Largura"
                    value={l}
                    onChange={e => setl(e.target.value)}
                />
                <input 
                    placeholder="Altura"
                    value={a}
                    onChange={e => seta(e.target.value)}
                />
                <input 
                    placeholder="Valor do Produto"
                    value={valorMercadoria}
                    onChange={e => setvalorMercadoria(e.target.value)}
                />
                <select value={tipo} onChange={e => settipo(e.target.value)}>
                    <option value="pac">Pac</option>
                    <option value="sedex">Sedex</option>
                    <option value="sedex10">Sedex10</option>
                    <option value="sedex12">Sedex12</option>
                </select>
                <button className="button" type="submit">Calcular</button>  
            </form>
            <label>Frete=R${frete} </label>



        </div>
    );
}