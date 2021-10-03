import React from 'react'
import {API} from "../types";
import {fetchFilteredPhotos, fetchPhotos} from "../api/getPhotos";

type Context = {
  photos: Array<API.Photo>
  loading: boolean
  getPhoto: (photoId: number) => API.Photo | undefined
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const PhotosContext = React.createContext<Context>({ photos: [], loading: false, getPhoto: () => undefined, search: '', setSearch: () => null });

const PhotosStore: React.FC = ({ children }) => {
  const [photos, setPhotos] = React.useState<Array<API.Photo>>([])
  const [search, setSearch] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  
  const getPhoto = (photoId: number): API.Photo | undefined => {
    const index = photos.findIndex(({ id }) => id === photoId)
    if (index) return photos[index]
  }
  
  React.useEffect(() => {
    async function photos() {
      setLoading(true)
      try {
        let response;
        if (search) {
          response = await fetchFilteredPhotos(search)
        } else {
          response = await fetchPhotos()
        }
        setPhotos(response.photos)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  
    photos()
  }, [search])
  
  return (
    <PhotosContext.Provider value={{ photos, loading, getPhoto, search, setSearch }}>
      {children}
    </PhotosContext.Provider>
  )
}

export default PhotosStore
