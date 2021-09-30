import React from 'react'
import { Link } from "react-router-dom";
import * as S from './styles'

type PhotoProps = {
  id: string,
  url: string
  vertical: boolean
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const PhotoItem: React.FC<PhotoProps> = ({ url, vertical, id}) => (
  <Link to={id}>
    <S.Image vertical={vertical} variants={item} layoutId={id} src={url}/>
  </Link>
)

export default PhotoItem;
