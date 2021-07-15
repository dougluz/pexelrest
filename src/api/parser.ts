import { ParsedPexelPhotosResponse, PexelFullResponse, PexelPhotosResponse } from "../types";

export const pexelResponseParser = (response: PexelPhotosResponse): ParsedPexelPhotosResponse => {
  return {
    nextPage: response.next_page,
    page: response.page,
    perPage: response.per_page,
    photos: response.photos 
  }
}