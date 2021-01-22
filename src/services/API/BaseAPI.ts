import axios, { AxiosInstance } from "axios";

export const apiClient: AxiosInstance = axios.create({baseURL: 'http://mbd.mvcdigital.com.br/api'});