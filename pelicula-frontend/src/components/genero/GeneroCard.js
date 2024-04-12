import React from 'react'

export const GeneroCard = (props) => {

    const { genero } = props;

    return (
        <div >
            <table className="table table- table-hover">
                <tbody>
                    <tr>                        
                        <td>{genero.nombre}</td>
                        <tr>{genero.estado}</tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
