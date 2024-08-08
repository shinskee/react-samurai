import store from './Redux/redux-store.js'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)


