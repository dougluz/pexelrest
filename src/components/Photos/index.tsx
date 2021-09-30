import React from 'react'
import { API } from '../../types';
import PhotoItem from '../PhotoItem'
import * as S from './styles'
import Modal from "../Modal";
import {AnimatePresence} from "framer-motion";
import {useParams} from "react-router-dom";

type PhotosProps = {
  data: Array<API.Photo>
}

const grid = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const Photos = ({ data }: PhotosProps) => {
  const { id } = useParams<{ id: string }>()
  
  const isVertical = (width: number, height: number): boolean => height > width;

  return (
    <S.Grid variants={grid} initial="hidden" animate="visible">
      {data.map(({
                   id,
                   src: { large },
                   width,
                   height
                 }) => <PhotoItem key={id} id={String(id)} url={large} vertical={isVertical(width, height)} />)}
      <AnimatePresence>
        {id && <Modal photoId={id} />}
      </AnimatePresence>
    </S.Grid>
  )
}

export default Photos
