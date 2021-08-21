import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Grid = styled(motion.div)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  grid-auto-flow: dense;
  justify-content: center;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  `
;
