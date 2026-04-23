import { environment } from "../constans/environment";
import { fetchApi } from "../utils/fetch";

export const getMenus = async (category?: string) => {
  let url = `${environment.API_URL}/menu?page=1&pageSize=25`;

  if (category) {
    url += `&category=${category}`;
  }

  const result = await fetchApi(url, {
    method: 'GET',
  }).then((data) => data);

  return result;
};