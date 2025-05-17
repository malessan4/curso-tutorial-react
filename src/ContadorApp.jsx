import React from 'react'

/*
const Button = () => {
    return (
        <button>Soy un boton</button>
    )

}
*/

export const ContadorApp = () => {
    return (
        <>
        <h1>Contador:</h1>
            <button onClick={ function(event) {console.log(event)}}>
                Soy un boton
            </button>
        </>
    )
}

