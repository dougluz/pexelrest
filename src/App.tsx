import React from 'react'
import * as S from './styles'
import Home from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import {AnimateSharedLayout} from "framer-motion";

const App = () => (
  <S.Container>
    <AnimateSharedLayout type="crossfade">
      <BrowserRouter>
        <Route path={["/:id", "/"]} component={Home} />
      </BrowserRouter>
    </AnimateSharedLayout>
  </S.Container> 
)

export default App
