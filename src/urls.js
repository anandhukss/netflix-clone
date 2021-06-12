import { apiKey } from "./constants/constants";

export const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;
export const originalsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`;
export const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;
export const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
export const romanceUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`;
export const documentUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`;