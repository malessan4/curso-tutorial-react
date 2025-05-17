import './PrimerComponente.css'
// Cuando el css es para el componente solo, lo mejor es que solo importe el componente jsx
// Cuando es el body de toda la app es en el main.jsx

// Lo ideal tambien seria que estuviera todos los estilos en una carpeta y ahi seria
// './styles/PrimerComponente.css

const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Musica', 4, 1000]
const boolean = true
const funcion = () => 1 + 1
const fecha = new Date()
const objeto = { nombre: 'Curso de Javascript', duracion: 4 }


/**
 * 
 * Lo mejor es que las variables esten fuera del scope del return, porque si tiene que pintar de nuevo deberia reasignar el valor de las
 * variables
 * 
 */

export const PrimerComponente = () => {
    return (
        <>
            <h1>Variable en JSX</h1>
            <h4>Variable de tipo String:</h4> <p>{string}</p>
            <h4>Variable de tipo Number:</h4> <p>{number}</p>
            <h4>Variable de tipo array:</h4> <p>{array}</p>
            <h4>Variable de tipo boolean:</h4> <p>{boolean}</p>
            <h4>Variable de tipo funcion:</h4> <p>{funcion}</p>
        </>
    )
}
