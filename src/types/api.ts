export type Photo = {
    id: number
    width: number
    height: number
    url: string
    photographer: string
    photographer_url: string
    photographer_id: number
    avg_color: string
    src: {
      original: string
      large2x: string
      large: string
      medium: string
      small: string
      portrait: string
      landscape: string
      tiny: string
    }  
  }
  
export type ParsedPexelPhotosResponse = {
  nextPage: string
  page: number
  perPage: number
  photos: Array<Photo>
}

export type PexelPhotosResponse = {
  next_page: string,
  page: number,
  per_page: number,
  photos: Array<Photo>
}

export type PexelFullResponse = {
  config: {},
  data: PexelPhotosResponse
  headers: {}
  status: number
  statusText: string
}
