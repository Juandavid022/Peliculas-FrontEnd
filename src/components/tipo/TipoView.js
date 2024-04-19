
import { ObtenerTipos } from '../services/tiposService'
import { TipoCard } from '../tipo/TipoCard'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const TipoView = () => {

  const [tipo, setTipos] = useState([]);
  const [valueForm, setvalueForm] = useState([]);

  const { fechaCreacion = '', fechaActualizacion = '', nombre = '', descripcion = '', } = valueForm



  const listarTipos = async () => {

    try {
      const { data } = await ObtenerTipos();
      console.log('GetTipos :>> ', data);
      setTipos(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarTipos();
  }, [])


  useEffect(() => {
    if (tipo) {
      setvalueForm({
        fechaCreacion: tipo.fechaCreacion,
        fechaActualizacion: tipo.fechaActualizacion,
        nombre: tipo.nombre,
        descripcion: tipo.descripcion

      });
    }
  }, [tipo]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const productora = {
      fechaCreacion, fechaActualizacion, nombre, descripcion
    }
    console.log('Tipo :>> ', tipo);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const { data } = await ObtenerTipos();
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
    <div className='container '>
      <h5 className='title'> <strong>Tipos</strong> </h5>
      <div className='col'>
          <div className='row'>
              {
                tipo.map((tipo) => {
                  return <TipoCard key={tipo._id} tipo={tipo} />
                })
              }
          </div>
      </div>
    </div>



  )
}


