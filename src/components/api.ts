import axios from "axios";

const ACCESS_KEY = "soeSXALL2rbtm5QVQFKtx_SDCoa5F0QUDDkb61eIncI";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestPicturesQuery = async <T>(query: string, page: number): Promise<T> => {
  try{ 
  const { data } = await instance.get<T>(
    `/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}`
  );
    return data;
  } catch (error) {
    throw error
  }
};
