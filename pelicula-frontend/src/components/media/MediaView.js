import React,{ useState, useEffect } from 'react'
import { ObtenerMedias } from '../services/mediaService'
import { MediaCard } from './MediaCard'


export const MediaView = () => {

  const [medias, setMedia] = useState([]);
  

  const listarMedia = async () => {

    try {
      const { data } = await ObtenerMedias();
      console.log('data :>> ', data);
      setMedia(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarMedia();
  },[] )

  
  
  return (
      <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 g-4" id="card_template">
        {


          medias.map((media) => {
            return <MediaCard key = { media._id }  />
          })

        }

      </div>
    </div>
  )
}

