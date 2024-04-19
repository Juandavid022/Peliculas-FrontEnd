import React, { useState, useEffect } from 'react'
import { ObtenerMedias } from '../services/mediaService'
import { MediaCard } from './MediaCard'
import { MediaNew } from './MediaNew'



export const MediaView = () => {

  const [medias, setMedia] = useState([]);
  const [openModal, setOpenModal] = useState(false);



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
  }, [])

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container-xxl">
      <div className="row row-cols-1 row-cols-md-4 g-4" id="card_template">
        {
          medias.map((media) => {
            return <MediaCard key={media._id} media={media} />
          })
        }

      </div>
      {
        openModal ? <MediaNew
          handleOpenModal={handleOpenModal}
          listarMedia={listarMedia} /> :
          <button className="btn btn-primary fab" id="btn" onClick={handleOpenModal}>
            <i className="fa-solid fa-plus"></i>
          </button>
      }
    </div>
  )
}

