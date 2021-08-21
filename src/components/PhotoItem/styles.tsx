import { motion } from "framer-motion";
import styled, { css } from "styled-components";

type ImageProps = {
  vertical: boolean
}

export const Wrapper = styled(motion.div)<ImageProps>`
  max-width: 100%;
  border-radius: 20px;
  ${({ vertical }) => vertical ? css`
    grid-row: span 2;
  ` : css`
    grid-column: span 2;
  `}
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  :hover {
    cursor: pointer;
  }
`;
