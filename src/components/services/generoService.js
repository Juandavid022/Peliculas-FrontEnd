import {axiosInstance} from '../../helper/axios-config'

const ObtenerGenero = async () => {
    return axiosInstance.get('genero',
    {headers: {
        'Content-Type':'application/json'
    }})
}

const CrearGenero = (data) => {
    return axiosInstance.post('genero',data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const EliminarGenero = (id,data) => {
    return axiosInstance.delete(`genero/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const ActualizarGenero = (id,data) => {
    return axiosInstance.put(`genero/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

export  {
    CrearGenero,
    ActualizarGenero,
    EliminarGenero,
    ObtenerGenero,
}