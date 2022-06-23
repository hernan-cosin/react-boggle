import React from "react";
import { Routes, Route} from "react-router-dom";
import { Layout } from "pages/layout";
import { Home } from "pages/home"
import {Play} from "pages/play"
import {Rules} from "pages/rules"


export function MyRouter() {
    return  <React.StrictMode> 
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/play" element={<Play />}></Route>
                <Route path="/rules" element={<Rules />}></Route>
              </Route>
          </Routes>
      </React.StrictMode>
}