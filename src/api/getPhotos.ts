import { API } from '../types';
import { client } from './client';
import { pexelResponseParser } from './parser';

export const fetchPhotos = async (page = 1, per = 25): Promise<API.ParsedPexelPhotosResponse> => {
  const { data }: API.PexelFullResponse = await client.get('curated', {
    params: {
      page,
      per_page: per
    }
  })

  return pexelResponseParser(data);
}

export const fetchFilteredPhotos = async (query = '', page = 1, per = 25): Promise<API.ParsedPexelPhotosResponse> => {
  const { data }: API.PexelFullResponse = await client.get('search', {
    params: {
      query,
      page,
      per_page: per
    }
  })

  return pexelResponseParser(data);
}
