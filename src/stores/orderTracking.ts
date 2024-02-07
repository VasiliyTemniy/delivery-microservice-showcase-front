import type { APIResponse, OrderTracking, SpringPage } from '@/services/types';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/services';
import { AxiosError } from 'axios';

export const useOrderTrackingStore = defineStore('orderTracking', () => {
  
  const orderTrackings = ref<OrderTracking[]>([]);

  const page = ref<number>(0);
  const size = ref<number>(0);

  const initOrderTrackings = (data: OrderTracking[]) => {
    orderTrackings.value = data;
  };

  const getOrderTrackings = computed(() => orderTrackings.value);

  const addOrderTracking = (data: OrderTracking) => {
    orderTrackings.value.push(data);
  };

  const removeOrderTracking = (orderId: string, pointNumber: number) => {
    orderTrackings.value = orderTrackings.value.filter(
      orderTracking => orderTracking.orderId !== orderId && orderTracking.pointNumber !== pointNumber
    );
  };

  const setPage = (newPage: number) => {
    page.value = newPage;
  };

  const setSize = (newSize: number) => {
    size.value = newSize;
  };

  const dispatchCreateOrderTracking = async (newOrderTracking: Omit<OrderTracking, 'id'>): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.create(newOrderTracking);
      if (status === 200) {
        addOrderTracking(data as unknown as OrderTracking); // caution! validate here!
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchGetAllOrderTrackingsByOrderId = async (orderId: string): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.getAllByOrderId(orderId);
      if (status === 200) {
        initOrderTrackings(data as unknown as OrderTracking[]); // caution! validate here!
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchGetPageOrderTrackingsByOrderId = async (orderId: string): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.getPageByOrderId(orderId, page.value, size.value);
      if (status === 200) {

        const parsedData = data as unknown as SpringPage<OrderTracking>; // caution! validate here!

        const orderTrackings = parsedData.content;

        setPage(parsedData.pageable.pageNumber);
        setSize(parsedData.pageable.pageSize);

        initOrderTrackings(orderTrackings); 
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchGetAllOrderTrackingsByCarrierId = async (carrierId: string): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.getAllByCarrierId(carrierId);
      if (status === 200) {
        initOrderTrackings(data as unknown as OrderTracking[]); // caution! validate here!
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchGetPageOrderTrackingsByCarrierId = async (carrierId: string): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.getPageByCarrierId(carrierId, page.value, size.value);
      if (status === 200) {

        const parsedData = data as unknown as SpringPage<OrderTracking>; // caution! validate here!

        const orderTrackings = parsedData.content;

        setPage(parsedData.pageable.pageNumber);
        setSize(parsedData.pageable.pageSize);

        initOrderTrackings(orderTrackings); 
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchUpdateOrderTracking = async (updatedOrderTracking: Omit<OrderTracking, 'id'>): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.update(updatedOrderTracking);
      if (status === 200) {
        addOrderTracking(data as unknown as OrderTracking); // caution! validate here!
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchRemoveOrderTracking = async (orderId: string, pointNumber: number): Promise<APIResponse<null>> => {
    try {
      const { status } = await api.orderTracking.removeById(orderId, pointNumber);
      if (status === 200) {
        removeOrderTracking(orderId, pointNumber);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchRemoveAllOrderTrackingsByOrderId = async (orderId: string): Promise<APIResponse<null>> => {
    try {
      const { status } = await api.orderTracking.removeAllByOrderId(orderId);
      if (status === 200) {
        initOrderTrackings([]);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchPopulateBackendTestData = async (): Promise<APIResponse<null>> => {
    try {
      const { status } = await api.orderTracking.populateBackendTestData();
      if (status === 200) {
        initOrderTrackings([]);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };

  const dispatchRemoveAllBackendTestData = async (): Promise<APIResponse<null>> => {
    try {
      const { status } = await api.orderTracking.removeAllBackendTestData();
      if (status === 200) {
        initOrderTrackings([]);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      return {
        success: false,
        content: null,
        status: error.response?.status,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  };
  return {
    orderTrackings,
    page,
    size,
    setPage,
    setSize,
    initOrderTrackings,
    getOrderTrackings,
    dispatchCreateOrderTracking,
    dispatchGetAllOrderTrackingsByOrderId,
    dispatchGetPageOrderTrackingsByOrderId,
    dispatchGetAllOrderTrackingsByCarrierId,
    dispatchGetPageOrderTrackingsByCarrierId,
    dispatchUpdateOrderTracking,
    dispatchRemoveOrderTracking,
    dispatchRemoveAllOrderTrackingsByOrderId,
    dispatchPopulateBackendTestData,
    dispatchRemoveAllBackendTestData
  };
});