import styled from "styled-components";
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
  background: #fff;
  width: 40%;
  height: 30%;
  margin-left: 20px;
  align-self: flex-end;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthorName = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
