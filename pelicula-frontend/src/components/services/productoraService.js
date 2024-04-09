import {axiosInstance} from '../../helper/axios-config'

const ObtenerProductora = () => {
    return axiosInstance.get('/productoras',
    {headers: {
        'Content-Type':'application/json'
    }})
}

const CrearProductora = (data) => {
    return axiosInstance.post('/productoras',data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const EliminarProductora = (id,data) => {
    return axiosInstance.delete(`/productoras/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const ActualizarProductora = (id,data) => {
    return axiosInstance.put(`/productoras/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

export  {
    CrearProductora,
    ActualizarProductora,
    EliminarProductora,
    ObtenerProductora,
}