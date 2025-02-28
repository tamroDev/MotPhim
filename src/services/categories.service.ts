import { http } from '../ultils/http';

export const getCategories = async () => {
  try {
    const response = await http.get('the-loai');
    return response;
  } catch (error) {
    console.log(error);
  }
};
