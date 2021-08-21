import React from 'react'
import * as S from './styles'

type PhotoProps = {
  url: string
  vertical: boolean
}

const wrapper = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const PhotoItem: React.FC<PhotoProps> = ({ url, vertical }) => <S.Wrapper variants={wrapper} vertical={vertical}><S.Image src={url} /></S.Wrapper>

export default PhotoItem;
