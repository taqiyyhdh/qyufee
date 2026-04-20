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

export const updateOrder = async (
  id: string,
  payload: { status: string },
) => {
  const result = await fetchApi(`${environment.API_URL}/orders/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
    body: JSON.stringify(payload),
});
  return result;
}