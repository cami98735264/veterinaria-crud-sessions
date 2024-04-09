import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import funciones from './authorization_submits/index.js'
import IsAuthenticated from './components/IsAuthenticated.js';
import './index.css';
import FormCredenciales from './components/FormCredenciales.js';
import Page404 from './components/page404.js';
import Layout from './components/Layout.js';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main.js';
const loginContext = createContext();

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <Page404 mensajeError={"Ha habido un error en la aplicación"}/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/login",
        element: <FormCredenciales motivo={"Iniciar Sesión"} esRegistro={false} idFormulario="formularioLogin" onSubmit={funciones.onSubmitLogin}/>

      },
      {
        path: "/signup",
        element: <FormCredenciales motivo={"Registrarse"} onSubmit={funciones.onSubmitRegister} esRegistro={true}/>
      },
      {
        path: "*",
        element: <Page404 mensajeError={"¡Parece que te has perdido de ruta, vuelve a la página principal!"}/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IsAuthenticated>
      <RouterProvider router={router} >
      </RouterProvider>
    </IsAuthenticated>
  </React.StrictMode>
);

export default loginContext;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
