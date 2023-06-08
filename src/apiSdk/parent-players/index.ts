import axios from 'axios';
import queryString from 'query-string';
import { ParentPlayerInterface, ParentPlayerGetQueryInterface } from 'interfaces/parent-player';
import { GetQueryInterface } from '../../interfaces';

export const getParentPlayers = async (query?: ParentPlayerGetQueryInterface) => {
  const response = await axios.get(`/api/parent-players${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createParentPlayer = async (parentPlayer: ParentPlayerInterface) => {
  const response = await axios.post('/api/parent-players', parentPlayer);
  return response.data;
};

export const updateParentPlayerById = async (id: string, parentPlayer: ParentPlayerInterface) => {
  const response = await axios.put(`/api/parent-players/${id}`, parentPlayer);
  return response.data;
};

export const getParentPlayerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/parent-players/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteParentPlayerById = async (id: string) => {
  const response = await axios.delete(`/api/parent-players/${id}`);
  return response.data;
};
