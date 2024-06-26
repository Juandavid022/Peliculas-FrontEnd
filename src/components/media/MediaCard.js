import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';


export const MediaCard = (props) => {

    const { media } = props;

    return (

        <div >
            <br />
            <div className="card card-responsive">
                <img src={media.imagen} className="card-img-top" alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{media.titulo}</h5>
                    <hr />
                    <p className="card-text" id='sinopsis'>{`Sinopsis: ${media.sinopsis}`} </p>
                    <p className="card-text" id='aEstreno'>{`Año Estreno: ${media.anioEstreno}`} </p>
                    <p className="card-link" id='link'>
                        <Link to={`media/edit/${media._id}`}> Editar </Link>
                    </p>

                </div>
            </div>
        </div>
    )

}
