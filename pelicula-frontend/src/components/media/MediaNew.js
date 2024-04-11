import React from 'react'

export const MediaNew = ({ handleOpenModal }) => {
    return (
        <div className="row">
            <div className='sidebar'>
                <div className="container-fluid">
                    <div className="col">
                        <div className="sidebar-header">
                            <h3>Nueva Media</h3>
                            <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col' >
                            <hr></hr>
                        </div>
                    </div>
                    <form>
                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Serial</label>
                                    <input type="text" className="form-control" id="serialInput" name='serial' />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Titulo</label>
                                    <input type="text" className="form-control" id="titulolInput" name='titulo' />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Sinapsis</label>
                                    <input type="text" className="form-control" id="sinapsisInput" name='sinopsis' />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Año de Estreno</label>
                                    <input type="text" className="form-control" id="estrenoInput" name='Estreno' />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">URL Pelicula</label>
                                    <input type="text" className="form-control" id="urlPeliculaInput" name='urlPelicula' />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Imagen</label>
                                    <input type="text" className="form-control" id="imgInput" name='imagen' />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Genero</label>
                                    <select className='form-control'>
                                        required
                                        <option value=''>--Seleccione--</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Productora</label>
                                    <select className='form-control'>
                                        required
                                        <option value=''>--Seleccione--</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className='form-control'>
                                        required
                                        <option value=''>--Seleccione--</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Tipo</label>
                                    <select className='form-control'>
                                        required
                                        <option value=''>--Seleccione--</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
