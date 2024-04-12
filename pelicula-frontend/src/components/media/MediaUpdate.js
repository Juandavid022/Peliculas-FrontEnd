import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { GetMediaId, ActualizarMedia } from '../services/mediaService';
import { ObtenerTipos } from '../services/tiposService'
import { ObtenerGenero } from '../services/generoService'
import { ObtenerProductora } from '../services/productoraService'
import { ObtenerDirectores } from '../services/directoresService'
import Swal from 'sweetalert2';

export const MediaUpdate = () => {

  const { mediaId = '' } = useParams();
  const [media, setMedia] = useState();
  const [tipos, setTipos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [valueForm, setvalueForm] = useState([]);

  const { serial = '', titulo = '', sinopsis = '', urlPelicula = '', imagen = '', anioEstreno = '', generoPrincipal = '', directorPrincipal = '', productora = '', tipo = '' } = valueForm

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
  }, []);

  useEffect(() => {
    listarDirector();
  }, []);

  useEffect(() => {
    listarProductoras();
  }, []);

  useEffect(() => {
    listarTipo();
  }, []);


  const getMedia = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await GetMediaId(mediaId);
      console.log(data);
      setMedia(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    getMedia();
  }, [mediaId]);

  useEffect(() => {
    if (media) {
      setvalueForm({
        serial: media.serial,
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        urlPelicula: media.urlPelicula,
        imagen: media.imagen,
        anioEstreno: media.anioEstreno,
        generoPrincipal: media.generoPrincipal,
        directorPrincipal: media.directorPrincipal,
        productora: media.productora,
        tipo: media.tipo
      });
    }
  }, [media]);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setvalueForm({ ...valueForm, [name]: value });
  }

  const handleOnSubmit = async (ex) => {
    ex.preventDefault();
    const media = {
      serial, titulo, sinopsis, urlPelicula, imagen, anioEstreno,
      generoPrincipal: { _id: generoPrincipal },
      directorPrincipal: { _id: directorPrincipal },
      productora: { _id: productora },
      tipo: { _id: tipo }

    }
    console.log('media :>> ', media);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const { data } = await ActualizarMedia(mediaId, media);
      Swal.close();
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      Swal.close();
      let mensaje;
      if (error && error.response & error.response.data) {
        mensaje = error.response.data;
      } else {
        mensaje = "Ocurrió un error, por favor intente de nuevo ";
      }
      Swal.fire('Error', 'Ocurrió un error, por favor verifique los datos', 'error');
    }
  }

  return (
    <div className='container-fluid mt-3 mb-2'>
      <div className="card">
        <div className='card-header'>
          <h5 className='card-title'> Actualizar información</h5>

        </div>

        <div className="card text-bg-">
          <div className='row'>
          <hr/>
            <div className='col-md-4'>
            <div className='col'>
              <hr/>
              <img src={media?.imagen } className="card-img" alt="Image" />
              </div>
            </div>
            <div className='col-md-8'>

              <form onSubmit={(ex) => handleOnSubmit(ex)}>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Serial</label>
                      <input type="text" className="form-control" id="serialInput" name='serial' required
                        value={serial}
                        onChange={e => handleOnChange(e)} />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Titulo</label>
                      <input type="text" className="form-control" id="titulolInput" name='titulo'
                        required
                        value={titulo}
                        onChange={e => handleOnChange(e)} />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Sinapsis</label>
                      <input type="text" className="form-control" id="sinapsisInput" name='sinopsis'
                        required
                        value={sinopsis}
                        onChange={e => handleOnChange(e)} />
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
                        onChange={e => handleOnChange(e)} />
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
                      <label className="form-label">Tipos</label>
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
                  <button type="submit" className="btn btn-primary">Guardar</button>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
