const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Musica', 4, 1000]
const boolean = true
const funcion = () => 1+1
const fecha = new Date()
const objeto = {nombre: 'Curso de Javascript', duracion: 4}



export const PrimerComponente = () => {
    return (
        <p>{JSON.stringify(fecha)}</p>
    )
}
