// @flow
import fetch from 'node-fetch';
import config from './config';
import type { TraktMovieHistoryType } from './types';

const headers = {
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': config.clientId,
};

const options = {
    headers,
};

const fetchMovies = async (user: string): Promise<TraktMovieHistoryType> => {
    const url = `https://api.trakt.tv/users/${user}/watched/movies`;
    try {
        const movieData: TraktMovieHistoryType = fetch(url, options);
        return movieData;
    } catch (err) {
        const message = err.message || 'Unknown error';
        console.error(message, err);
        return [];
    }
};
