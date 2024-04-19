import React from 'react'

export const GeneroCard = (props) => {

    const { genero } = props;

    return (
        <div >
            <table className="table table-responsive">

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{genero.nombre}</td>
                        <td>{genero.descripcion}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
