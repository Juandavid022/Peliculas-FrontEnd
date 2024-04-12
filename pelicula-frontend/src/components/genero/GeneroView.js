
import { ObtenerGenero } from '../services/generoService'
import { GeneroCard } from '../genero/GeneroCard'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const GeneroView = () => {

  const [genero, setGenero] = useState([]);
  const [valueForm, setvalueForm] = useState([]);

  const { estado = '', fechaCreacion = '', fechaActualizacion = '', nombre = '', descripcion = '' } = valueForm



  const listarGenero = async () => {

    try {
      const { data } = await ObtenerGenero();
      console.log('generoGet :>> ', data);
      setGenero(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarGenero();
  }, [])

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setvalueForm({ ...valueForm, [name]: value });
  }

  useEffect(() => {
    if (genero) {
      setvalueForm({
        estado: genero.estado,
        fechaCreacion: genero.fechaCreacion,
        fechaActualizacion: genero.fechaActualizacion,
        nombre: genero.nombre,
        descripcion: genero.descripcion

      });
    }
  }, [genero]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const genero = {
      estado, fechaCreacion, fechaActualizacion, nombre, descripcion
    }
    console.log('media :>> ', genero);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const { data } = await ObtenerGenero();
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


          <div className='row'>
            <hr />
          </div>
          <div className='col'>
              <div className='row'>
                
                <div className="mb-3" >
                  {
                    genero.map((genero) => {
                      return <GeneroCard key={genero._id} genero={genero} />
                    })
                  }
                </div>
              </div>

          </div>
        </div>



  )
}

