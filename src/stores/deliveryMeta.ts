import type { DeliveryMeta, APIResponse } from '@/services/types';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/services';
import { AxiosError } from 'axios';

export const useOrderTrackingStore = defineStore('deliveryMeta', () => {

  const deliveryMeta = ref<DeliveryMeta>();

  const getDeliveryMeta = computed(() => deliveryMeta.value);

  const setDeliveryMeta = (newDeliveryMeta: DeliveryMeta) => {
    deliveryMeta.value = newDeliveryMeta;
  };

  const dispatchCalculateDeliveryMeta = async (): Promise<APIResponse<null>> => {
    try {
      const { status, data } = await api.deliveryMeta.calculateDeliveryMeta(/*args*/);
      if (status === 200) {
        setDeliveryMeta(data as unknown as DeliveryMeta); // caution! validate here!
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
    deliveryMeta,
    getDeliveryMeta,
    dispatchCalculateDeliveryMeta
  };

});