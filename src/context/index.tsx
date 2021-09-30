import React from 'react'
import {API} from "../types";
import {fetchPhotos} from "../api/getPhotos";

type Context = {
  photos: Array<API.Photo>
  loading: boolean
  getPhoto: (photoId: number) => API.Photo | undefined
}

export const PhotosContext = React.createContext<Context>({ photos: [], loading: false, getPhoto: () => undefined });

const PhotosStore: React.FC = ({ children }) => {
  const [photos, setPhotos] = React.useState<Array<API.Photo>>([])
  const [loading, setLoading] = React.useState(false);
  
  const getPhoto = (photoId: number): API.Photo | undefined => {
    const index = photos.findIndex(({ id }) => id === photoId)
    if (index) return photos[index]
  }
  
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
    <PhotosContext.Provider value={{ photos, loading, getPhoto }}>
      {children}
    </PhotosContext.Provider>
  )
}

export default PhotosStore
