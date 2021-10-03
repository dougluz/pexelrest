import React, {useContext} from "react";
import {PhotosContext} from "../../context";
import Photos from "../../components/Photos";
import Loading from "../../components/Loading";
import * as S from './styles'

const Home = () => {
  const { loading, photos } = useContext(PhotosContext)
  
  return (
    <S.Container loading={loading}>
      <Photos data={photos} />
      {loading && <Loading />}
    </S.Container>
  )
}

export default Home
