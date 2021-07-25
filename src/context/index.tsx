import React from 'react'

const PhotosContext = React.createContext({});

const PhotosStore: React.FC = ({ children }) => (
  <PhotosContext.Provider value={{}}>
    {children}
  </PhotosContext.Provider>
)

export default PhotosStore
