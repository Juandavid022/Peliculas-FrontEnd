import {axiosInstance} from '../../helper/axios-config'

const ObtenerMedias = async () => { 
    return axiosInstance.get('media',
    {headers: {
        'Content-Type':'application/json'
    }})
}


const CrearMedia = (data) => {
    return axiosInstance.post('media',data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const EliminarMedia = (id,data) => {
    return axiosInstance.delete(`media/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const ActualizarMedia = (id,data) => {
    return axiosInstance.put(`media/${id}`,data,
    {headers: {
        'Content-Type':'application/json'
    }})
}

const GetMediaId = (mediaId) => {
    return axiosInstance.get(`media/${mediaId}`,
    {headers: {
        'Content-Type':'application/json'
    }})
}

export  {
    CrearMedia,
    ActualizarMedia,
    EliminarMedia,
    ObtenerMedias,
    GetMediaId
}