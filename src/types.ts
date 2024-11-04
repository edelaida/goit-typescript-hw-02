export interface Picture {
  query: string,
  page: number,  
}
    
export interface PictureImg {
  picture: {
    id: number,
    alt_description: string,
    urls: {
      small: string,
      regular: string
    }
  }      
}