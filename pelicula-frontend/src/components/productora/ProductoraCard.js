import React from 'react'

export const ProductoraCard = (props) => {

    const { productora } = props;

    return (
        <div >
            <table className="table table- table-hover">
                <tbody>
                    <tr>                        
                        <td>{productora.nombre}</td>
                        <tr>{productora.estado}</tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
