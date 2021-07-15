import { ParsedPexelPhotosResponse, PexelFullResponse } from '../types';
import { client } from './client';
import { pexelResponseParser } from './parser';

export const fetchPhotos = async (page = 1, per = 25, query = ''): Promise<ParsedPexelPhotosResponse> => {
  const { data }: PexelFullResponse = await client.get('curated', {
    params: {
      query,
      page,
      per_page: per
    }
  })

  return pexelResponseParser(data);
}
