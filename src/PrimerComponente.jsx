const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Musica', 4, 1000]
const boolean = true
const funcion = () => 1 + 1
const fecha = new Date()
const objeto = { nombre: 'Curso de Javascript', duracion: 4 }



export const PrimerComponente = () => {
    return (
        <div>
            <h1>Variable en JSX</h1>
            <h4>Variable de tipo String:</h4> <p>{string}</p>
            <h4>Variable de tipo Number:</h4> <p>{number}</p>
            <h4>Variable de tipo array:</h4> <p>{array}</p>
            <h4>Variable de tipo boolean:</h4> <p>{boolean}</p>
            <h4>Variable de tipo funcion:</h4> <p>{funcion}</p>
        </div>
    )
}
