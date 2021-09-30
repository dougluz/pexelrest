import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.4);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  :hover {
    cursor: auto;
  }
`;

export const Image = styled(motion.img)`
  z-index: 2;
  border-radius: 20px;
  max-height: 100%;
`;
