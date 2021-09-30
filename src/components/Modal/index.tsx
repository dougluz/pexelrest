import React, {useContext, useEffect, useState} from "react"
import * as S from './styles'
import {PhotosContext} from "../../context";
import {API} from "../../types";
import PhotoInfo from "../PhotoInfo";
import {useHistory} from "react-router-dom";

type ModalProps = {
  photoId: string
}

const Modal = ({ photoId }: ModalProps) => {
  const [photo, setPhoto] = useState<API.Photo>()
  const { getPhoto } = useContext(PhotosContext)
  const history = useHistory()
  
  useEffect(() => {
    setPhoto(getPhoto(Number(photoId)))
  }, [photoId])
  
  return (
    <S.Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3 }}
      onClick={history.goBack}
    >
      <S.Container>
          <S.Image src={photo?.src.large} alt={photo?.url} layoutId={photoId} />
          <PhotoInfo author={{ photographer: photo?.photographer, url: photo?.photographer_url}} color={photo?.avg_color} url={photo?.url} />
        </S.Container>
    </S.Overlay>
  )
}

export default Modal
