import { apiMarkers } from '../config/config';

const api = apiMarkers;

export const getAll = () =>
  fetch(`${api}/markers`)
    .then(res => res.json())
    .then(data => data)