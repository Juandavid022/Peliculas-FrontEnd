import React from 'react'

export const TipoCard = (props) => {

    const { tipo } = props;

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>{tipo.nombre}</strong> 
                    </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <hd></hd>
                    {tipo.descripcion}</div>
                </div>
            </div>
        </div>
    )
}
