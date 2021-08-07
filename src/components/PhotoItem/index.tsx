import React from 'react'
import * as S from './styles'

type PhotoProps = {
  url: string
  vertical: boolean
}

const PhotoItem: React.FC<PhotoProps> = ({ url, vertical }) => <S.Wrapper vertical={vertical}><S.Image src={url} /></S.Wrapper>

export default PhotoItem;
