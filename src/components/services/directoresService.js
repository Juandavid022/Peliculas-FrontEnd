import {axiosInstance} from '../../helper/axios-config'

const ObtenerDirectores = () => {
    return axiosInstance.get('directores',
    {headers: {
        'Content-Type':'application/json'
    }})
}

const CrearDirectores = (data) => {
    return axiosInstance.post('directores',data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const EliminarDirectores = (id,data) => {
    return axiosInstance.delete(`directores/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const ActualizarDirectores = (id,data) => {
    return axiosInstance.put(`directores/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

export  {
    CrearDirectores,
    ActualizarDirectores,
    EliminarDirectores,
    ObtenerDirectores,
}