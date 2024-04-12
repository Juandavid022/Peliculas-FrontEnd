import React from 'react'

export const ProductoraCard = (props) => {

    const { productora } = props;

    return (
        <div className="mt-2 p-3 x-2 bg-dark text-white ">
            <div className="container-fluid  ">

                <h5 className="card-title">{productora.nombre}</h5>
                <p className="card-text">{productora.slogan}</p>

                </div>
        </div>
    )
}
