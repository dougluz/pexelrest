import React from 'react'
import { fetchPhotos } from './api/getPhotos'
import { API } from './types'
import Loading from './components/Loading'
import Photos from './components/Photos'
import * as S from './styles'

function App() {
  const [photos, setPhotos] = React.useState<Array<API.Photo>>([])
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function photos() {
      setLoading(true)
      try {
        const { photos } = await fetchPhotos()
        setPhotos(photos)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    photos()
  }, [])

  return (
    <S.View>
      {loading ? (
        <Loading />
      ) : (
        <Photos data={photos} />
      )}
    </S.View>
  )
}

export default App
