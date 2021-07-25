import React from 'react'
import * as S from './styles';
import PhotoItem from './components/PhotoItem'
import { fetchPhotos } from './api/getPhotos'
import { Photo } from './types'

function App() {
  const [photos, setPhotos] = React.useState<Array<Photo>>([])

  const isVertical = (width: number, height: number): boolean => height > width;
  React.useEffect(() => {
    async function photos() {
      const { photos } = await fetchPhotos()
      setPhotos(photos)
    }

    photos()
  }, [])

  return (
    <S.Wrapper>
      {photos.map(({
        id,
        src: { large },
        width,
        height
      }) => <PhotoItem key={id} url={large} vertical={isVertical(width, height)} />)}
    </S.Wrapper>
  )
}

export default App
