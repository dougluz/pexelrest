import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import React from "react";

type ImageProps = {
  vertical: boolean
}

export const Image = styled(motion.img)<ImageProps>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
  ${({ vertical }) => vertical ? css`
    grid-row: span 2;
  ` : css`
    grid-column: span 2;
  `}

  :hover {
    cursor: pointer;
  }
`;
