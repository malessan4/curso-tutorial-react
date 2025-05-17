import React from 'react'

/*
const Button = () => {
    return (
        <button>Soy un boton</button>
    )

}
*/

export const ContadorApp = () => {
    function handleClick(event, arg) {
        console.log(event)
    }
    return (
        <>
        <h1>Contador:</h1>
            <button onClick={handleClick}>
                Soy un boton
            </button>
        </>
    )
}

