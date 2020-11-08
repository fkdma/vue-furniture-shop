/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const { CancelToken } = axios;

let cancel;
const defaultOptions = {
  baseURL: `${process.env.VUE_APP_API_BASEURL}v1/`,
  cancelToken: new CancelToken(((c) => {
    cancel = c;
  })),
};
const instance = Object.assign(axios.create(defaultOptions), { cancel });

const api = () => instance;
export default api;
