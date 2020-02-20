// import { Action } from "redux";
import { createAction } from "@reduxjs/toolkit";

export const WriteText = createAction("Escribimos un texto para la busqueda");
export const LoadVideos = createAction("Cargar los videos dado una busqueda");
export const RequestLogin = createAction("Se realiza la solicitud de login");
