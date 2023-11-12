import axios from 'axios';

export const DetectiveBackend = axios.create({
  baseURL: "http://localhost:3001"
});

// taken from https://stackoverflow.com/questions/23187013/is-there-a-better-way-to-sanitize-input-with-javascript
export const sanitizeString = (str) => {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
  return str.trim();
}
