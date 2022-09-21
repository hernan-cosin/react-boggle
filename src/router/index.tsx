import React from "react";
import { Routes, Route} from "react-router-dom";
import { Layout } from "pages/layout";
import {Play} from "pages/play"

export function MyRouter() {
    return  <React.StrictMode> 
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Play />}></Route>
              </Route>
          </Routes>
      </React.StrictMode>
}