import React, {useContext} from "react";
import {PhotosContext} from "../../context";
import Photos from "../../components/Photos";
import Loading from "../../components/Loading";

const Home = () => {
  const { loading, photos } = useContext(PhotosContext)
  
  return (
    <>
      <Photos data={photos} />
      {loading && <Loading/>}
    </>
  )
}

export default Home
