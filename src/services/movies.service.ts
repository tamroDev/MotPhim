import { http } from '../ultils/http';

export const getNewMovie = async (page: number) => {
  try {
    const response = await http.get(
      `danh-sach/phim-moi-cap-nhat-v2?page=${page}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
