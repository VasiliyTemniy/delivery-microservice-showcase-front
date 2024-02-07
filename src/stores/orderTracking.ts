import type { APIResponse, OrderTracking, OrderTrackingDto, SpringPage } from '@/services/types';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/services';
import { AxiosError } from 'axios';

export const useOrderTrackingStore = defineStore('orderTracking', () => {
  
  const orderTrackings = ref<OrderTracking[]>([]);

  const page = ref<number>(0);
  const size = ref<number>(4);

  const totalPages = ref<number>(0);

  const initOrderTrackings = (data: OrderTrackingDto[]) => {
    orderTrackings.value = data.map(dto => {
      return {
        ...dto,
        estimatedDeliveryAt: dto.estimatedDeliveryAt ? new Date(dto.estimatedDeliveryAt) : undefined,
        deliveredAt: dto.deliveredAt ? new Date(dto.deliveredAt) : undefined,
        createdAt: dto.createdAt ? new Date(dto.createdAt) : undefined,
        updatedAt: dto.updatedAt ? new Date(dto.updatedAt) : undefined
      };
    });
  };

  const getOrderTrackings = computed(() => orderTrackings.value);

  const addOrderTracking = (data: OrderTrackingDto) => {
    orderTrackings.value.push({
      ...data,
      estimatedDeliveryAt: data.estimatedDeliveryAt ? new Date(data.estimatedDeliveryAt) : undefined,
      deliveredAt: data.deliveredAt ? new Date(data.deliveredAt) : undefined,
      createdAt: data.createdAt ? new Date(data.createdAt) : undefined,
      updatedAt: data.updatedAt ? new Date(data.updatedAt) : undefined
    });
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

  const setTotalPages = (newTotalPages: number) => {
    totalPages.value = newTotalPages;
  };

  const dispatchCreateOrderTracking = async (newOrderTracking: Omit<OrderTracking, 'id'>): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.orderTracking.create(newOrderTracking);
      if (status === 201) {
        addOrderTracking(data as unknown as OrderTrackingDto); // caution! validate here!
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
        initOrderTrackings(data as unknown as OrderTrackingDto[]); // caution! validate here!
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

        const parsedData = data as unknown as SpringPage<OrderTrackingDto>; // caution! validate here!

        const orderTrackings = parsedData.content;

        setPage(parsedData.pageable.pageNumber);
        setSize(parsedData.pageable.pageSize);
        setTotalPages(parsedData.totalPages);

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
        initOrderTrackings(data as unknown as OrderTrackingDto[]); // caution! validate here!
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

        const parsedData = data as unknown as SpringPage<OrderTrackingDto>; // caution! validate here!

        const orderTrackings = parsedData.content;

        setPage(parsedData.pageable.pageNumber);
        setSize(parsedData.pageable.pageSize);
        setTotalPages(parsedData.totalPages);

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
        addOrderTracking(data as unknown as OrderTrackingDto); // caution! validate here!
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
      if (status === 410) {
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
      if (status === 410) {
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
      if (status === 410) {
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