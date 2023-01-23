export const AppRoute = {
  HOME: '/',
  VIDEO: '/videos/:id',
  UPLOAD: '/upload',
};

export const API = {
  VIDEOS: 'https://project-2-api.herokuapp.com/videos?api_key=d9321c15-a32c-46ab-a15d-07809df6aaef',
  VIDEO: 'https://project-2-api.herokuapp.com/videos/:id?api_key=d9321c15-a32c-46ab-a15d-07809df6aaef',
};



const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT = `${BASE_URL}/videos`;
export const ENDPOINT_UPD = `${BASE_URL}`