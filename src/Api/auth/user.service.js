import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:3000/api';

const getPublicContent = () => axios.get(`${API_URL}all`);

const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });

const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });

const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
