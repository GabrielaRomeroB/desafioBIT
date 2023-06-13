/*
import StyleCart from './styles/content.module.css'
import React from 'react'
import { useState, useEffect } from 'react'


const Ingresos = () =>{
    let[data,set] = useState([]);
    useEffect(() => {
        const obtener = () => {
            return fetch(
                ''
            )
            .then(respuesta => respuesta.json())
            .then((data) => set(data))
            .catch(error => console.error(error));
        };
        obtener();
        return () => set([]);
    },[]);
    return (<ul>{data.map((product) => (
                <li key={product.id}>
                    <h2>{product.title}</h2> 
                    <h3>{product.price}</h3>
                    <picture>
                        <img style={{width:"50px",height:"200px"}} src={product.image} alt={`imagen from character ${product.title}`}/>
                    </picture>
                </li> 
                ))}
            </ul>);
}

export default Productos;

*/