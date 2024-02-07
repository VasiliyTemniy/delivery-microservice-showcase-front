import type { OrderTracking, OrderTrackingDto } from './types';
import { apiBaseUrl } from './apiBaseUrl';
import axios, { type AxiosResponse } from 'axios';


const create = async (newOrderTracking: Omit<OrderTracking, 'id'>): Promise<AxiosResponse<JSON>> => {

  const reqBody: Omit<OrderTrackingDto, 'id' | 'createdAt' | 'updatedAt'> = {
    ...newOrderTracking,
    estimatedDeliveryAt: newOrderTracking.estimatedDeliveryAt?.toISOString(),
    deliveredAt: newOrderTracking.deliveredAt?.toISOString()
    // createdAt and updatedAt are still here; to exclude them at all - remove spread operator, apply attrs/props one by one
  };

  return await axios.post<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking`,
    JSON.stringify(reqBody),
  );
};

const getAllByOrderId = async (orderId: string): Promise<AxiosResponse<JSON>> => {

  return await axios.get<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/flow/by-order-id/${orderId}`,
  );
};

const getPageByOrderId = async (orderId: string, page: number, size: number): Promise<AxiosResponse<JSON>> => {

  return await axios.get<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/by-order-id/${orderId}?page=${page}&size=${size}`,
  );
};

const getAllByCarrierId = async (carrierId: string): Promise<AxiosResponse<JSON>> => {

  return await axios.get<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/flow/by-carrier-id/${carrierId}`,
  );
};

const getPageByCarrierId = async (carrierId: string, page: number, size: number): Promise<AxiosResponse<JSON>> => {

  return await axios.get<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/by-carrier-id/${carrierId}?page=${page}&size=${size}`,
  );
};

const update = async (updatedOrderTracking: OrderTracking): Promise<AxiosResponse<JSON>> => {

  const reqBody: Omit<OrderTrackingDto, 'createdAt' | 'updatedAt'> = {
    ...updatedOrderTracking,
    estimatedDeliveryAt: updatedOrderTracking.estimatedDeliveryAt?.toISOString(),
    deliveredAt: updatedOrderTracking.deliveredAt?.toISOString()
    // createdAt and updatedAt are still here; to exclude them at all - remove spread operator, apply attrs/props one by one
  };

  return await axios.put<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking`,
    JSON.stringify(reqBody),
  );
};

const removeById = async (orderId: string, pointNumber: number): Promise<AxiosResponse<JSON>> => {

  return await axios.delete<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/${orderId}/${pointNumber}`,
  );
};

const removeAllByOrderId = async (orderId: string): Promise<AxiosResponse<JSON>> => {

  return await axios.delete<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/flow/by-order-id/${orderId}`,
  );
};

const populateBackendTestData = async (): Promise<AxiosResponse<JSON>> => {

  return await axios.post<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/populate-test-data`
  );
};

const removeAllBackendTestData = async (): Promise<AxiosResponse<JSON>> => {

  return await axios.delete<JSON>(
    `${apiBaseUrl}/coroutine/order-tracking/all`
  );
};

export default {
  create,
  getAllByOrderId,
  getPageByOrderId,
  getAllByCarrierId,
  getPageByCarrierId,
  update,
  removeById,
  removeAllByOrderId,
  populateBackendTestData,
  removeAllBackendTestData
};