
import { ObtenerProductora } from '../services/productoraService'
import { ProductoraCard } from '../productora/ProductoraCard'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const ProductoraView = () => {

  const [productora, setProductora] = useState([]);
  const [valueForm, setvalueForm] = useState([]);

  const { estado = '', fechaCreacion = '', fechaActualizacion = '', nombre = '', slogan = '', descripcion = '', } = valueForm



  const listarProductora = async () => {

    try {
      const { data } = await ObtenerProductora();
      console.log('GetProductora :>> ', data);
      setProductora(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarProductora();
  }, [])


  useEffect(() => {
    if (productora) {
      setvalueForm({
        estado: productora.estado,
        fechaCreacion: productora.fechaCreacion,
        fechaActualizacion: productora.fechaActualizacion,
        nombre: productora.nombre,
        slogan: productora.slogan,
        descripcion: productora.descripcion

      });
    }
  }, [productora]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const productora = {
      estado, fechaCreacion, fechaActualizacion, nombre, slogan, descripcion
    }
    console.log('Productora :>> ', productora);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const { data } = await ObtenerProductora();
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
    <div className="container-sm">
        <div className='row'>
          <hr />
        </div>
        <div class="row-3">
          
          <div className='row row-cols-2 row-cols-md-3 '>

            {
              productora.map((productora) => {
                return <ProductoraCard key={productora._id} productora={productora} />
              })
            }

          </div>

        </div>

        </div>

  )
}


