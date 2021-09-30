import React from "react";
import * as S from './styles';
import AverageColor from "../AverageColor";

type PhotoInfoProps = {
  author: {
    photographer: string
    url: string
  }
  color: string
  url: string
}

const infoContainer = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1
    }
  }
};

const PhotoInfo = ({ author, color, url }: PhotoInfoProps) => (
  <S.Container variants={infoContainer} initial="hidden" animate="visible">
    <p>Photo By: <S.AuthorName href={author.url}>{author.photographer}</S.AuthorName></p>
    <AverageColor color={color} />
    <p>Photo provided by Pexel</p>
  </S.Container>
)

export default PhotoInfo
