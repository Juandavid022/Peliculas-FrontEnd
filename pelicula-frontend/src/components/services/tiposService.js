import {axiosInstance} from '../../helper/axios-config'

const ObtenerTipos = () => {
    return axiosInstance.get('tipos',
    {headers: {
        'Content-Type':'application/json'
    }})
}

const CrearTipos = (data) => {
    return axiosInstance.post('tipos',data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const EliminarTipos = (id,data) => {
    return axiosInstance.delete(`tipos/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const ActualizarTipos = (id,data) => {
    return axiosInstance.put(`tipos/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

export  {
    CrearTipos,
    ActualizarTipos,
    EliminarTipos,
    ObtenerTipos,
}