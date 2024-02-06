import type { OrderTracking } from './types';
import { apiBaseUrl } from './apiBaseUrl';
import axios from 'axios';


const createOrderTracking = async (newOrderTracking: Omit<OrderTracking, 'id'>): Promise<JSON> => {

  const reqBody: Omit<OrderTracking, 'id'> = newOrderTracking;

  const { data: response } = await axios.post<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking`,
    JSON.stringify(reqBody),
  );

  return response;
};

const getAllByOrderId = async (orderId: string): Promise<JSON> => {

  const { data: response } = await axios.get<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/flow/by-order-id/${orderId}`,
  );

  return response;

};

const populateBackendTestData = async (): Promise<JSON> => {

  const { data: response } = await axios.post<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/populate-test-data`
  );

  return response;
};


export default {
  createOrderTracking,
  getAllByOrderId,
  populateBackendTestData
};