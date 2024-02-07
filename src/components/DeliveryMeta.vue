<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDeliveryMetaStore } from '@/stores/deliveryMeta';


const deliveryMetaStore = useDeliveryMetaStore();

const deliveryMeta = storeToRefs(deliveryMetaStore).deliveryMeta;


const onGetClick = () => {
  deliveryMetaStore.dispatchCalculateDeliveryMeta();
};

</script>

<template>
  <div class="button-wrapper p-4">
    <button class="self-start bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
        @click="onGetClick"
    >
      Посчитать метаданные доставки
    </button>
  </div>
  
  <div class="p-4">
    Стоимость: {{ deliveryMeta.cost }} - Ориентировочное время доставки в миллисекундах {{ deliveryMeta.estimatedDeliveryMs }}
  </div>

  
</template>