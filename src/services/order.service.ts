import { environment } from "../constans/environment";
import { fetchApi } from "../utils/fetch";
import { getLocalStorage } from "../utils/storage";

export const getOrders = async () => {
  let url = `${environment.API_URL}/orders?page=1&pageSize=10`;
  const result = await fetchApi(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  }).then((data) => data);

  return result;
};
