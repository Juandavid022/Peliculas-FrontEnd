
import React, { useState, useEffect } from 'react'
import { ObtenerTipos } from '../services/tiposService'
import { ObtenerGenero } from '../services/generoService'
import { ObtenerProductora } from '../services/productoraService'
import { ObtenerDirectores } from '../services/directoresService'
import Swal from 'sweetalert2'
import {CrearMedia} from '../services/mediaService'



export const MediaNew = ({ handleOpenModal , listarMedia}) => {



    const [tipos, setTipos] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [directores, setDirectores] = useState([]);
    const [valueForm, setvalueForm] = useState([]);

    const {serial ='',titulo='', sinopsis='',urlPelicula='',imagen='',anioEstreno='', generoPrincipal='', directorPrincipal='', productora='', tipo=''} = valueForm

    const listarGenero = async () => {
        try {
            const { data } = await ObtenerGenero();
            console.log('data :>> ', data);
            setGeneros(data);

        } catch (error) {
            console.log(error);
        }
    }

    const listarDirector = async () => {
        try {
            const { data } = await ObtenerDirectores();
            console.log('data :>> ', data);
            setDirectores(data);

        } catch (error) {
            console.log(error);
        }
    }

    const listarTipo = async () => {
        try {
            const { data } = await ObtenerTipos();
            console.log('data :>> ', data);
            setTipos(data);

        } catch (error) {
            console.log(error);
        }
    }

    const listarProductoras = async () => {
        try {
            const { data } = await ObtenerProductora();
            console.log('data :>> ', data);
            setProductoras(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarGenero();
        listarTipo();
        listarDirector();
        listarProductoras();
    }, [])

    const handleOnChange = ({target}) => {
        const {name, value} = target;
        setvalueForm({...valueForm,[name]: value});
    }

    const handleOnSubmit = async (ex) =>{
        ex.preventDefault();
        const media = {
            serial,titulo, sinopsis,urlPelicula,imagen,anioEstreno, 
            generoPrincipal: {_id:generoPrincipal}, 
            directorPrincipal: {_id:directorPrincipal}, 
            productora: {_id:productora}, 
            tipo : {_id:tipo}

        }
        console.log('media :>> ', media);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            })
            Swal.showLoading()
            const  data  =await CrearMedia(media)
            handleOpenModal()
            listarMedia()  
            Swal.close()

        } catch (error) {
            console.log('error :>> ', error);
            Swal.close();
        }
    }

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
                    <form onSubmit={(ex) => handleOnSubmit(ex)}>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Serial</label>
                                    <input type="text" className="form-control" id="serialInput" name='serial' required 
                                    value={serial}
                                    onChange={e => handleOnChange(e)}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Titulo</label>
                                    <input type="text" className="form-control" id="titulolInput" name='titulo' 
                                    required
                                    value={titulo}
                                    onChange={e => handleOnChange(e)}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Sinapsis</label>
                                    <input type="text" className="form-control" id="sinapsisInput" name='sinopsis' 
                                    required
                                    value={sinopsis}
                                    onChange={e => handleOnChange(e)}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Año de Estreno</label>
                                    <input type="text" className="form-control" id="estrenoInput" name='anioEstreno'
                                    required
                                    value={anioEstreno}
                                    onChange={e => handleOnChange(e)} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">URL Pelicula</label>
                                    <input type="text" className="form-control" id="urlPeliculaInput" name='urlPelicula'
                                    required
                                    value={urlPelicula}
                                    onChange={e => handleOnChange(e)} />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Imagen</label>
                                    <input type="text" className="form-control" id="imgInput" name='imagen' 
                                    required
                                    value={imagen}
                                    onChange={e => handleOnChange(e)}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Genero</label>
                                    <select className='form-select'
                                    name='generoPrincipal'
                                    required
                                    value={generoPrincipal}
                                    onChange={e => handleOnChange(e)}>
                                        
                                        <option value=''>--Seleccione--</option>
                                        {
                                            generos.map(({ _id, nombre }) => {
                                                return <option key={_id} value={_id} >{nombre}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Productora</label>
                                    <select className='form-select'
                                    name='productora'
                                    required
                                    value={productora}
                                    onChange={e => handleOnChange(e)}>
                                        
                                        <option value=''>--Seleccione--</option>
                                        {
                                            productoras.map(({ _id, nombre }) => {
                                                return <option key={_id} value={_id} >{nombre}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className='form-select'
                                    name='directorPrincipal'
                                    required
                                    value={directorPrincipal}
                                    onChange={e => handleOnChange(e)}>
                                        
                                        <option value=''>--Seleccione--</option>
                                        {
                                            directores.map(({ _id, nombre }) => {
                                                return <option key={_id} value={_id} >{nombre}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Tipo</label>
                                    <select className='form-select'
                                    name='tipo'
                                    required
                                    value={tipo}
                                    onChange={e => handleOnChange(e)}>
                                        
                                        <option value=''>--Seleccione--</option>
                                        {
                                            tipos.map(({ _id, nombre }) => {
                                                return <option key={_id} value={_id} >{nombre}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <button type="submit" class="btn btn-primary">Guardar</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
