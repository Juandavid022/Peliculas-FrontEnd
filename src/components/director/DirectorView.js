
import { ObtenerDirectores, ObtenerGenero } from '../services/directoresService'
import { DirectorCard, GeneroCard } from '../director/DirectorCard'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const DirectorView = () => {

  const [director, setDirector] = useState([]);
  const [valueForm, setvalueForm] = useState([]);

  const { estado = '', fechaCreacion = '', fechaActualizacion = '', nombre = '' } = valueForm



  const listarDirector = async () => {

    try {
      const { data } = await ObtenerDirectores();
      console.log('GetDirectores :>> ', data);
      setDirector(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarDirector();
  }, [])


  useEffect(() => {
    if (director) {
      setvalueForm({
        estado: director.estado,
        fechaCreacion: director.fechaCreacion,
        fechaActualizacion: director.fechaActualizacion,
        nombre: director.nombre

      });
    }
  }, [director]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const director = {
      estado, fechaCreacion, fechaActualizacion, nombre
    }
    console.log('director :>> ', director);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const { data } = await ObtenerDirectores();
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
    <div className='container-fluid '>
      <div className="card">
        <div className='card-header'>
          <h5 className='card-title'> Directores</h5>
          <div className='row'>
            <hr />
          </div>
          <div className='col'>
            <form >
              <div className='row'>
                <div className="mb-3" >
                  {
                    director.map((director) => {
                      return <DirectorCard key={director._id} director={director} />
                    })
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}


