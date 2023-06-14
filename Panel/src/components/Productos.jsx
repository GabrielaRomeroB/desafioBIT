//import StyleProduct from './styles/content.module.css'

import { useState, useEffect } from 'react'

const Productos = () =>{
    let[productos,actualizar] = useState([]);
    //let[contador,setContador] =useState(0)
    //let [isLoading, setIsLoading] = useState(true);
    let [showForm, setShowForm] = useState(false); // Agregamos un estado para controlar la visualización del formulario
    
    useEffect(() => {
        const obtener = () => {
            fetch(
                'https://fakestoreapi.com/products'
            )
            .then(respuesta => respuesta.json())
            .then(productos => actualizar(productos))
            .catch(error => console.error(error));
        };
        obtener();
        return () => 
            actualizar([]);
    },[]);
    

    const agregar = (evento) =>{ 
        evento.preventDefault();
        const {title,price,description,image,category} = evento.target.elements;
        console.log("title", title.value,"price",price.value, 
        "description",description.value ,"image", image.value, "category", category.value)
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(
                {
                    title: title.value,
                    price: parseFloat(price.value),
                    description: description.value,
                    image: image.value,
                    category: category.value
                }
            ),
        })
        .then((res) => res.json())
        .then((data) => actualizar([...productos,data]))
        .catch(error => console.error(error));
        // Actualizamos el estado para ocultar el formulario después de enviarlo
        //setContador(contador + 1);
        setShowForm(false);
    };


    const verFormulario = () =>{
        return(
            <form onSubmit={agregar}>
                <input type='text' name='title'  placeholder='title'/>
                <input type='text' name='price'  placeholder='price'/>
                <input type='text' name='description'  placeholder='description'/>
                <input type='url' name='image'  placeholder='imageUrl'/>
                <input type='text' name='category'  placeholder='category'/>
                <button type='submit'>Agregar</button>
            </form> 

        ) 
    }
    
    return ( 
        <>
            <span>Total de productos en tienda : {productos.length} </span>
            <button type='button' onClick={() => setShowForm(true)}>Agregar Producto</button>
            {showForm && verFormulario()} 
            <ul>      
                    {productos.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2> 
                        <h3>{product.price}</h3>
                    <picture>
                        <img style={{width:"50px",height:"200px"}} src={product.image} alt={`imagen from character ${product.title}`}/>
                    </picture>
                    </li> 
                ))}
            </ul>                 
        </>
    );
}

export default Productos;

/*
import { useState, useEffect } from 'react';

const Productos = () => {
  let [data, actualizar] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [showForm, setShowForm] = useState(false); // Agregamos un estado para controlar la visualización del formulario

  useEffect(() => {
    const obtener = () => {
      fetch('https://fakestoreapi.com/products')
        .then(respuesta => respuesta.json())
        .then(data => {
          actualizar(data);
          setIsLoading(false); // Actualizamos el estado para indicar que la carga ha finalizado
        })
        .catch(error => console.error(error));
    };

    obtener();
    return () => actualizar([]);
  }, []);

  const agregar = (evento) => {
    evento.preventDefault();
    const { title, price, description, image, category } = evento.target.elements;

    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corregimos el typo en "application/json"
      },
      body: JSON.stringify({
        title: title.value,
        price: parseFloat(price.value), // Convertimos el valor a un número decimal
        description: description.value,
        image: image.value,
        category: category.value
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));

    // Actualizamos el estado para ocultar el formulario después de enviarlo
    setShowForm(false);
  };

  const verFormulario = () => {
    return (
      <form onSubmit={agregar}>
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='price' placeholder='price' />
        <input type='text' name='description' placeholder='description' />
        <input type='url' name='image' placeholder='imageUrl' />
        <input type='text' name='category' placeholder='category' />
        <button type='submit'>Agregar</button>
      </form>
    );
  }

  return (
    <>
      <button type='button' onClick={() => setShowForm(true)}>Agregar Producto</button>

      {showForm && verFormulario()}  {" "}

      <ul>
        <li>Total de productos en tienda: {data.length}</li>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <picture>
              <img style={{ width: "50px", height: "200px" }} src={product.image} alt={`imagen from character ${product.title}`} />
            </picture>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Productos;


*/