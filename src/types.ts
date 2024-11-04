export interface Picture {
  query: string,
  page: number,  
}
    
export interface Image {
  id: number;
  picture: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}